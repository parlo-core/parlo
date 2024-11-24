# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Campaigns::DestroyService, type: :service do
  subject(:destroy_service) { described_class.new(campaign:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:campaign) { create(:campaign, company:, list:) }

  before { campaign }

  context 'when params are passed correctly' do
    it 'removes campaign' do
      expect { destroy_service.call }.to change(Campaign, :count).by(-1)
    end
  end

  context 'when campaign cannot be found' do
    let(:campaign) { nil }

    it 'returns not found error' do
      result = destroy_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('campaign')
        expect(result.error.message).to eq('campaign_not_found')
      end
    end
  end
end
