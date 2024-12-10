# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::CompaniesController, type: :request do
  let(:company) { create(:company) }
  let(:user) { create(:user, company:) }
  let(:token) { Auth::TokenService.new(user:).encode_token.token }

  before do
    user
    token
  end

  describe 'update' do
    let(:update_params) do
      {
        name: 'update_1',
        country: 'it',
        address_line1: 'test address',
        city: 'Bergamo',
        zipcode: '1234'
      }
    end

    it 'updates a country' do
      put_with_token(token, "/admin/companies", { company: update_params })

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:company][:name]).to eq(update_params[:name])
        expect(json[:company][:country]).to eq(update_params[:country].upcase)
        expect(json[:company][:address_line1]).to eq(update_params[:address_line1])
        expect(json[:company][:city]).to eq(update_params[:city])
        expect(json[:company][:zipcode]).to eq(update_params[:zipcode])
      end
    end
  end

  describe 'show' do
    it 'returns company' do
      get_with_token(token, "/admin/companies/current")

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:company][:name]).to eq(company.name)
      end
    end
  end
end
