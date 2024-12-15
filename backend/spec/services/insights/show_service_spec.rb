# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Insights::ShowService, type: :service, cache: :memory do
  subject(:show_service) { described_class.new(company:) }

  let(:company) { create(:company) }
  let(:campaign) { create(:campaign, company:, list:, subject: 's1', starting_at: Time.current) }
  let(:list) { create(:list, company:, name: 'l1') }
  let(:contact1) { create(:contact, company:, list:, email: 't1@example.com') }
  let(:contact2) { create(:contact, company:, list:, email: 't2@example.com') }
  let(:contact3) { create(:contact, company:, list:, email: 't3@example.com', status: 'unsubscribed') }

  let(:campaign2) { create(:campaign, company:, list: list2, subject: 's2', starting_at: Time.current - 1.day) }
  let(:list2) { create(:list, company:, name: 'l2') }
  let(:contact11) { create(:contact, company:, list: list2, email: 't11@example.com') }
  let(:contact22) { create(:contact, company:, list: list2, email: 't22@example.com') }

  let(:company3) { create(:company, name: '3') }
  let(:list3) { create(:list, company: company3, name: 'l3') }
  let(:contact111) { create(:contact, company: company3, list: list3, email: 't111@example.com') }
  let(:contact222) { create(:contact, company: company3, list: list3, email: 't222@example.com') }
  let(:campaign3) do
    create(:campaign, company: company3, list: list3, subject: 's3', starting_at: Time.current - 2.days)
  end

  before do
    campaign
    list
    contact1
    contact2
    contact3
    campaign2
    list2
    contact11
    contact22
    campaign3
    list3
    contact111
    contact222

    Rails.cache.clear
  end

  it 'uses the Rails cache' do
    key = [
      'campaign_insights',
      Date.current.strftime('%Y-%m-%d'),
      company.id
    ].join('/')

    expect do
      show_service.call
    end.to change { Rails.cache.exist?(key) }.from(false).to(true)
  end

  it 'returns correct data' do
    result = show_service.call

    records = result.records

    aggregate_failures do
      expect(result).to be_succeeded
      expect(records.count).to eq(2)
      expect(records[0][:campaign_id]).to eq(campaign.id)
      expect(records[0][:campaign_subject]).to eq(campaign.subject)
      expect(records[0][:dispatched_date]).to eq(campaign.starting_at)
      expect(records[0][:total_contacts]).to eq(3)
      expect(records[0][:unsubscribe_percentage]).to eq(33.33)
      expect(records[0][:open_rate]).to eq(0.25)

      expect(records[1][:campaign_id]).to eq(campaign2.id)
      expect(records[1][:campaign_subject]).to eq(campaign2.subject)
      expect(records[1][:dispatched_date]).to eq(campaign2.starting_at)
      expect(records[1][:total_contacts]).to eq(2)
      expect(records[1][:unsubscribe_percentage]).to eq(0.0)
      expect(records[1][:open_rate]).to eq(0.25)
    end
  end
end
