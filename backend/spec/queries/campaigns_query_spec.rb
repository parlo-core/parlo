# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CampaignsQuery, type: :query do
  subject(:campaign_query) do
    described_class.new(company:, search_term:, page:, limit:)
  end

  let(:search_term) { nil }
  let(:page) { 1 }
  let(:limit) { 10 }
  let(:company) { create(:company) }
  let(:campaign_first) { create(:campaign, company:, subject: 'defgh') }
  let(:campaign_second) { create(:campaign, company:, subject: 'abcde') }
  let(:campaign_third) { create(:campaign, company:, subject: 'presuv') }

  before do
    campaign_first
    campaign_second
    campaign_third
  end

  it 'returns all campaigns' do
    result = campaign_query.call

    returned_ids = result.campaigns.pluck(:id)

    aggregate_failures do
      expect(result.campaigns.count).to eq(3)
      expect(returned_ids).to include(campaign_first.id)
      expect(returned_ids).to include(campaign_second.id)
      expect(returned_ids).to include(campaign_third.id)
    end
  end

  context 'when searching for /de/ term' do
    let(:search_term) { 'de' }

    it 'returns only two campaigns' do
      result = campaign_query.call

      returned_ids = result.campaigns.pluck(:id)

      aggregate_failures do
        expect(result.campaigns.count).to eq(2)
        expect(returned_ids).to include(campaign_first.id)
        expect(returned_ids).to include(campaign_second.id)
        expect(returned_ids).not_to include(campaign_third.id)
      end
    end
  end
end
