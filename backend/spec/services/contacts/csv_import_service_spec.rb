# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contacts::CsvImportService, type: :service do
  subject(:import_service) { described_class.new(file_path:, list_id: list.id, company_id: company.id) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:file_path) { 'spec/fixtures/contacts.csv' }

  context 'when import is successful' do
    it 'creates 3 new contacts' do
      expect { import_service.call }.to change(Contact, :count).by(3)
    end

    it 'creates correct data' do
      import_service.call

      aggregate_failures do
        contact1 = Contact.find_by(email: 'mrichards@example.com')
        expect(contact1).to have_attributes(
          name: 'Mark Richards',
          email: 'mrichards@example.com',
          status: 'subscribed',
          company_id: company.id,
          list_id: list.id
        )

        contact2 = Contact.find_by(email: 'jexpress@example.com')
        expect(contact2).to have_attributes(
          name: 'Jane Express',
          email: 'jexpress@example.com',
          status: 'unsubscribed',
          company_id: company.id,
          list_id: list.id
        )

        contact3 = Contact.find_by(email: 'zoe@example.com')
        expect(contact3).to have_attributes(
          name: 'Ivan Zoe',
          email: 'zoe@example.com',
          status: 'subscribed',
          company_id: company.id,
          list_id: list.id
        )
      end
    end
  end

  context 'when contact email already exists' do
    let(:contact) { create(:contact, name: 'contact-worldwide', email: 'zoe@example.com', company:) }

    before { contact }

    it 'returns validation error' do
      result = import_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('email')
        expect(result.error.messages.first[:code]).to eq('value_already_exist')
      end
    end

    it 'creates 2 contacts' do
      expect { import_service.call }.to change(Contact, :count).by(2)
    end
  end
end
