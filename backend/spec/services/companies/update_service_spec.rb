# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Companies::UpdateService, type: :service do
  subject(:update_service) { described_class.new(company:, params:) }

  let(:company) { create(:company) }
  let(:params) do
    {
      name: 'update_1',
      country: 'it',
      address_line1: 'test address',
      city: 'Bergamo',
      zipcode: '1234'
    }
  end

  before { company }

  context 'when params are passed correctly' do
    it 'updates company' do
      result = update_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.company.name).to eq('update_1')
        expect(result.company.country).to eq('IT')
        expect(result.company.address_line1).to eq('test address')
        expect(result.company.city).to eq('Bergamo')
        expect(result.company.zipcode).to eq('1234')
      end
    end
  end

  context 'when country code is invalid' do
    let(:params) do
      {
        name: 'update_1',
        country: 'c1b2',
        address_line1: 'test address',
        city: 'Bergamo',
        zipcode: '1234'
      }
    end

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('country')
        expect(result.error.messages.first[:code]).to eq('invalid_country_code')
      end
    end
  end

  context 'when company cannot be found' do
    let(:company) { nil }

    it 'returns not found error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('company')
        expect(result.error.message).to eq('company_not_found')
      end
    end
  end
end
