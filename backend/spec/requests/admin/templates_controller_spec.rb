# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::TemplatesController, type: :request do
  let(:company) { create(:company) }
  let(:user) { create(:user, company:) }
  let(:token) { Auth::TokenService.new(user:).encode_token.token }

  before do
    user
    token
  end

  describe 'create' do
    let(:create_params) do
      {
        name: 'template_test_1',
        content: '<div>Test</div>'
      }
    end

    it 'creates a template' do
      post_with_token(token, '/admin/templates', { template: create_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:template][:name]).to eq(create_params[:name])
        expect(json[:template][:content]).to eq(create_params[:content])
      end
    end

    context 'when files are passed' do
      let(:create_params) do
        {
          name: 'template_test_1',
          content: '<div>Test</div>',
          file_uploads: [
            {
              file_url: 'url.example.com',
              file_name: 'test',
              file_type: 'image/jpeg',
              file_size: 1000
            }
          ]
        }
      end

      it 'creates file upload record' do
        expect { post_with_token(token, '/admin/templates', { template: create_params }) }
          .to change(FileUpload, :count).by(1)
      end
    end

    context 'when token is invalid' do
      it 'returns unauthorized error' do
        post_with_token('invalid-token', '/admin/templates', { template: create_params })

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'update' do
    let(:template) { create(:template, company:) }
    let(:update_params) do
      {
        name: 'update_1',
        content: '<p>Paragraph</p>'
      }
    end

    it 'updates a template' do
      put_with_token(token, "/admin/templates/#{template.id}", { template: update_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:template][:name]).to eq(update_params[:name])
        expect(json[:template][:content]).to eq(update_params[:content])
      end
    end

    context 'when template does not exist' do
      it 'returns not_found error' do
        put_with_token(token, '/admin/templates/invalid', { template: update_params })

        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when template name already exists in company scope' do
      let(:template2) { create(:template, company:, name: 'update_1') }

      before { template2 }

      it 'returns unprocessable_entity error' do
        put_with_token(token, "/admin/templates/#{template.id}", { template: update_params })

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'destroy' do
    let(:template) { create(:template, company:) }

    before { template }

    it 'deletes a template' do
      expect { delete_with_token(token, "/admin/templates/#{template.id}") }
        .to change(Template, :count).by(-1)
    end

    it 'returns deleted template' do
      delete_with_token(token, "/admin/templates/#{template.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:template][:name]).to eq(template.name)
      end
    end

    context 'when template does not exist' do
      it 'returns not_found error' do
        delete_with_token(token, '/admin/templates/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'show' do
    let(:template) { create(:template, company:) }

    before { template }

    it 'returns template' do
      get_with_token(token, "/admin/templates/#{template.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:template][:name]).to eq(template.name)
      end
    end

    context 'when template does not exist' do
      it 'returns not_found error' do
        get_with_token(token, '/admin/templates/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'index' do
    let(:template) { create(:template, company:) }

    before { template }

    it 'returns templates' do
      get_with_token(token, '/admin/templates')

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:templates].count).to eq(1)
        expect(json[:templates].first[:name]).to eq(template.name)
      end
    end

    context 'with pagination' do
      let(:template2) { create(:template, company:, name: 'second') }

      before { template2 }

      it 'returns templates with correct meta data' do
        get_with_token(token, '/admin/templates?page=1&per_page=1')

        aggregate_failures do
          expect(response).to have_http_status(:success)
          expect(json[:templates].count).to eq(1)
          expect(json[:meta][:current_page]).to eq(1)
          expect(json[:meta][:next_page]).to eq(2)
          expect(json[:meta][:prev_page]).to eq(nil)
          expect(json[:meta][:total_pages]).to eq(2)
          expect(json[:meta][:total_count]).to eq(2)
        end
      end
    end
  end
end
