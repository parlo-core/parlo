# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ListsQuery, type: :query do
  subject(:list_query) do
    described_class.new(company:, search_term:, page:, limit:)
  end

  let(:search_term) { nil }
  let(:page) { 1 }
  let(:limit) { 10 }
  let(:company) { create(:company) }
  let(:list_first) { create(:list, company:, name: 'defgh') }
  let(:list_second) { create(:list, company:, name: 'abcde') }
  let(:list_third) { create(:list, company:, name: 'presuv') }

  before do
    list_first
    list_second
    list_third
  end

  it 'returns all lists' do
    result = list_query.call

    returned_ids = result.lists.pluck(:id)

    aggregate_failures do
      expect(result.lists.count).to eq(3)
      expect(returned_ids).to include(list_first.id)
      expect(returned_ids).to include(list_second.id)
      expect(returned_ids).to include(list_third.id)
    end
  end

  context 'when searching for /de/ term' do
    let(:search_term) { 'de' }

    it 'returns only two lists' do
      result = list_query.call

      returned_ids = result.lists.pluck(:id)

      aggregate_failures do
        expect(result.lists.count).to eq(2)
        expect(returned_ids).to include(list_first.id)
        expect(returned_ids).to include(list_second.id)
        expect(returned_ids).not_to include(list_third.id)
      end
    end
  end
end
