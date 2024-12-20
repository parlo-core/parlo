# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::CampaignsController, type: :request do
  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:user) { create(:user, company:) }
  let(:token) { Auth::TokenService.new(user:).encode_token.token }

  before do
    user
    token
  end

  describe 'create' do
    let(:create_params) do
      {
        subject: 'campaign_test_123',
        from_name: 'contact_test_123-name',
        from_email: 'contact_test_123@example.com',
        content: '<p>TTT</p>',
        starting_at: Time.current.beginning_of_day + 1.day,
        list_id: list.id
      }
    end

    it 'creates a campaign' do
      post_with_token(token, '/admin/campaigns', { campaign: create_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:campaign][:subject]).to eq(create_params[:subject])
        expect(json[:campaign][:from_name]).to eq(create_params[:from_name])
        expect(json[:campaign][:from_email]).to eq(create_params[:from_email])

        campaign = Campaign.find_by(from_email: 'contact_test_123@example.com')

        expect(campaign.list_id).to eq(list.id)
        expect(campaign.company_id).to eq(company.id)
        expect(campaign.template_id).to be_present

        template = Template.find(campaign.template_id)

        expect(template.content).to eq('<p>TTT</p>')
      end
    end

    context 'when token is invalid' do
      it 'returns unauthorized error' do
        post_with_token('invalid-token', '/admin/campaigns', { campaign: create_params })

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'update' do
    let(:campaign) { create(:campaign, company:, list:) }
    let(:update_params) do
      {
        subject: 'campaign_test_123--',
        from_name: 'contact_test_123-name--',
        from_email: 'contact_test_123--@example.com'
      }
    end

    it 'updates a campaign' do
      put_with_token(token, "/admin/campaigns/#{campaign.id}", { campaign: update_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:campaign][:subject]).to eq(update_params[:subject])
        expect(json[:campaign][:from_name]).to eq(update_params[:from_name])
        expect(json[:campaign][:from_email]).to eq(update_params[:from_email])
      end
    end

    context 'when campaign does not exist' do
      it 'returns not_found error' do
        put_with_token(token, '/admin/campaigns/invalid', { campaign: update_params })

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'destroy' do
    let(:campaign) { create(:campaign, company:, list:) }

    before { campaign }

    it 'deletes a campaign' do
      expect { delete_with_token(token, "/admin/campaigns/#{campaign.id}") }
        .to change(Campaign, :count).by(-1)
    end

    it 'returns deleted campaign' do
      delete_with_token(token, "/admin/campaigns/#{campaign.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:campaign][:subject]).to eq(campaign.subject)
      end
    end

    context 'when campaign does not exist' do
      it 'returns not_found error' do
        delete_with_token(token, '/admin/campaigns/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'show' do
    let(:campaign) { create(:campaign, company:, list:) }

    before { campaign }

    it 'returns campaign' do
      get_with_token(token, "/admin/campaigns/#{campaign.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:campaign][:subject]).to eq(campaign.subject)
      end
    end

    context 'when campaign does not exist' do
      it 'returns not_found error' do
        get_with_token(token, '/admin/campaigns/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'index' do
    let(:campaign) { create(:campaign, company:, list:) }

    before { campaign }

    it 'returns campaigns' do
      get_with_token(token, '/admin/campaigns')

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:campaigns].count).to eq(1)
        expect(json[:campaigns].first[:subject]).to eq(campaign.subject)
      end
    end

    context 'with pagination' do
      let(:campaign2) { create(:campaign, company:, list:, from_email: 'second@example.com', subject: 'second') }

      before { campaign2 }

      it 'returns campaigns with correct meta data' do
        get_with_token(token, '/admin/campaigns?page=1&per_page=1')

        aggregate_failures do
          expect(response).to have_http_status(:success)
          expect(json[:campaigns].count).to eq(1)
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
