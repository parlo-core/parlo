# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactsQuery, type: :query do
  subject(:contact_query) do
    described_class.new(company:, search_term:, page:, limit:)
  end

  let(:search_term) { nil }
  let(:page) { 1 }
  let(:limit) { 10 }
  let(:company) { create(:company) }
  let(:contact_first) { create(:contact, company:, email: 'ii@example.com', name: 'defgh') }
  let(:contact_second) { create(:contact, company:, email: 'abcde@example.com', name: 'ww') }
  let(:contact_third) { create(:contact, company:, email: 'oo@example.com', name: 'presuv') }

  before do
    contact_first
    contact_second
    contact_third
  end

  it 'returns all contacts' do
    result = contact_query.call

    returned_ids = result.contacts.pluck(:id)

    aggregate_failures do
      expect(result.contacts.count).to eq(3)
      expect(returned_ids).to include(contact_first.id)
      expect(returned_ids).to include(contact_second.id)
      expect(returned_ids).to include(contact_third.id)
    end
  end

  context 'when searching for /de/ term' do
    let(:search_term) { 'de' }

    it 'returns only two contacts' do
      result = contact_query.call

      returned_ids = result.contacts.pluck(:id)

      aggregate_failures do
        expect(result.contacts.count).to eq(2)
        expect(returned_ids).to include(contact_first.id)
        expect(returned_ids).to include(contact_second.id)
        expect(returned_ids).not_to include(contact_third.id)
      end
    end
  end
end
