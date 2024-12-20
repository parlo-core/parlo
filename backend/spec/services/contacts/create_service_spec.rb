# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contacts::CreateService, type: :service do
  subject(:create_service) { described_class.new(params:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:params) do
    {
      name: 'contact-worldwide',
      email: 'contact-ww@example.com',
      status: 'unsubscribed',
      list_id: list.id,
      company_id: company.id
    }
  end

  context 'when params are passed correctly' do
    it 'creates contact' do
      result = create_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.contact.name).to eq('contact-worldwide')
        expect(result.contact.email).to eq('contact-ww@example.com')
        expect(result.contact.status).to eq('unsubscribed')
        expect(result.contact.list_id).to eq(list.id)
        expect(result.contact.company_id).to eq(company.id)
      end
    end
  end

  context 'when contact email already exists' do
    let(:contact) { create(:contact, name: 'contact-worldwide', email: 'contact-ww@example.com', list:) }

    before { contact }

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('email')
        expect(result.error.messages.first[:code]).to eq('value_already_exist')
      end
    end
  end

  context 'when contact email is invalid' do
    let(:params) do
      {
        name: 'contact-worldwide',
        email: 'contact-ww@',
        company_id: company.id,
        list_id: list.id,
      }
    end

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('email')
        expect(result.error.messages.first[:code]).to eq('invalid_email_format')
      end
    end
  end

  context 'when contact name is nil' do
    let(:params) do
      {
        name: nil,
        email: 'contact-ww@example.com',
        company_id: company.id,
        list_id: list.id
      }
    end

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('name')
        expect(result.error.messages.first[:code]).to eq('value_is_mandatory')
      end
    end
  end
end
