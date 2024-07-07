# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::BaseController, type: :controller do
  controller do
    def index
      render nothing: true
    end
  end

  describe '.authenticate' do
    let(:user) { create(:user) }
    let(:token) { Auth::TokenService.new(user:).encode_token.token }

    before { user }

    context 'with valid token' do
      it 'returns 200 OK' do
        request.headers['Authorization'] = "Bearer #{token}"

        get :index

        expect(response.status).to be(200)
      end
    end

    context 'without token' do
      it 'returns 401 status code' do
        get :index

        expect(response.status).to be(401)
      end
    end

    context 'without valid token' do
      it 'returns 401 status code' do
        request.headers['Authorization'] = 'Bearer 12345'

        get :index

        expect(response.status).to be(401)
      end
    end
  end
end
