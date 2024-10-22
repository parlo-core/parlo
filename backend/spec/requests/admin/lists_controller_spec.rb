# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::ListsController, type: :request do
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
        name: 'list_test_1'
      }
    end

    it 'creates a list' do
      post_with_token(token, '/admin/lists', { list: create_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:list][:name]).to eq(create_params[:name])
      end
    end

    context 'when token is invalid' do
      it 'returns unauthorized error' do
        post_with_token('invalid-token', '/admin/lists', { list: create_params })

        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'update' do
    let(:list) { create(:list, company:) }
    let(:update_params) do
      {
        name: 'update_1'
      }
    end

    it 'updates a list' do
      put_with_token(token, "/admin/lists/#{list.id}", { list: update_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:list][:name]).to eq(update_params[:name])
      end
    end

    context 'when list does not exist' do
      it 'returns not_found error' do
        put_with_token(token, '/admin/lists/invalid', { list: update_params })

        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when list name already exists in company scope' do
      let(:list2) { create(:list, company:, name: 'update_1') }

      before { list2 }

      it 'returns unprocessable_entity error' do
        put_with_token(token, "/admin/lists/#{list.id}", { list: update_params })

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'destroy' do
    let(:list) { create(:list, company:) }

    before { list }

    it 'deletes a list' do
      expect { delete_with_token(token, "/admin/lists/#{list.id}") }
        .to change(List, :count).by(-1)
    end

    it 'returns deleted list' do
      delete_with_token(token, "/admin/lists/#{list.id}")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:list][:name]).to eq(list.name)
      end
    end

    context 'when list does not exist' do
      it 'returns not_found error' do
        delete_with_token(token, '/admin/lists/invalid')

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'index' do
    let(:list) { create(:list, company:) }

    before { list }

    it 'returns lists' do
      get_with_token(token, '/admin/lists')

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:lists].count).to eq(1)
        expect(json[:lists].first[:name]).to eq(list.name)
      end
    end

    context 'with pagination' do
      let(:list2) { create(:list, company:, name: 'second') }

      before { list2 }

      it 'returns lists with correct meta data' do
        get_with_token(token, '/admin/lists?page=1&per_page=1')

        aggregate_failures do
          expect(response).to have_http_status(:success)
          expect(json[:lists].count).to eq(1)
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
