require 'rails_helper'

RSpec.describe ApplicationController, type: :request do
  describe 'GET /health_status' do
    it 'returns platform health status' do
      get '/health_status'

      aggregate_failures do
        expect(response.status).to be(200)
        expect(json[:message]).to eq('Healthy')
      end
    end
  end
end
