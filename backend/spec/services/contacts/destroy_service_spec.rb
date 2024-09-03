# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contacts::DestroyService, type: :service do
  subject(:destroy_service) { described_class.new(contact:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:contact) { create(:contact, company:, list:) }

  before { contact }

  context 'when params are passed correctly' do
    it 'removes contact' do
      expect { destroy_service.call }.to change(Contact, :count).by(-1)
    end
  end

  context 'when contact cannot be found' do
    let(:contact) { nil }

    it 'returns validation error' do
      result = destroy_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('contact')
        expect(result.error.message).to eq('contact_not_found')
      end
    end
  end
end
