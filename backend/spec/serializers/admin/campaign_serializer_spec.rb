# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ::Admin::CampaignSerializer do
  subject(:serializer) { described_class.new(campaign, root_name: 'campaign') }

  let(:campaign) { create(:campaign) }
  let(:list) { create(:list) }
  let(:campaign_list) { create(:campaign_list, campaign:, list:) }

  before { campaign_list }

  it 'serializes the object' do
    result = JSON.parse(serializer.to_json)

    aggregate_failures do
      expect(result['campaign']['id']).to eq(campaign.id)
      expect(result['campaign']['subject']).to eq(campaign.subject)
      expect(result['campaign']['from_name']).to eq(campaign.from_name)
      expect(result['campaign']['from_email']).to eq(campaign.from_email)
      expect(result['campaign']['starting_at']).to eq(campaign.starting_at.iso8601)
      expect(result['campaign']['lists'].first['name']).to eq(campaign_list.list.name)
      expect(result['campaign']['template']['content']).to eq(campaign.template.content)
    end
  end
end
