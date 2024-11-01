# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TemplatesQuery, type: :query do
  subject(:template_query) do
    described_class.new(company:, search_term:, page:, limit:)
  end

  let(:search_term) { nil }
  let(:page) { 1 }
  let(:limit) { 10 }
  let(:company) { create(:company) }
  let(:template_first) { create(:template, company:, name: 'defgh') }
  let(:template_second) { create(:template, company:, name: 'abcde') }
  let(:template_third) { create(:template, company:, name: 'presuv') }

  before do
    template_first
    template_second
    template_third
  end

  it 'returns all templates' do
    result = template_query.call

    returned_ids = result.templates.pluck(:id)

    aggregate_failures do
      expect(result.templates.count).to eq(3)
      expect(returned_ids).to include(template_first.id)
      expect(returned_ids).to include(template_second.id)
      expect(returned_ids).to include(template_third.id)
    end
  end

  context 'when searching for /de/ term' do
    let(:search_term) { 'de' }

    it 'returns only two templates' do
      result = template_query.call

      returned_ids = result.templates.pluck(:id)

      aggregate_failures do
        expect(result.templates.count).to eq(2)
        expect(returned_ids).to include(template_first.id)
        expect(returned_ids).to include(template_second.id)
        expect(returned_ids).not_to include(template_third.id)
      end
    end
  end
end
