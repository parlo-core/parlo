# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contacts::UpdateService, type: :service do
  subject(:update_service) { described_class.new(contact:, params:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:contact) { create(:contact, company:, list:) }
  let(:params) do
    {
      name: 'contact-worldwide',
      email: 'email1298@example.com',
      status: 'unsubscribed'
    }
  end

  before { contact }

  context 'when params are passed correctly' do
    it 'updates contact' do
      result = update_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.contact.name).to eq('contact-worldwide')
        expect(result.contact.email).to eq('email1298@example.com')
        expect(result.contact.status).to eq('unsubscribed')
      end
    end
  end

  context 'when email already exists' do
    let(:contact2) { create(:contact, email: 'email1298@example.com', list:) }

    before { contact2 }

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('email')
        expect(result.error.messages.first[:code]).to eq('value_already_exist')
      end
    end
  end

  context 'when contact name is nil' do
    let(:params) do
      {
        name: nil,
        email: 'email1298@example.com',
        status: 'unsubscribed'
      }
    end

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('name')
        expect(result.error.messages.first[:code]).to eq('value_is_mandatory')
      end
    end
  end

  context 'when contact cannot be found' do
    let(:contact) { nil }

    it 'returns not found error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('contact')
        expect(result.error.message).to eq('contact_not_found')
      end
    end
  end
end
