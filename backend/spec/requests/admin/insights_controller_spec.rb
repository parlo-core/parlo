# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::InsightsController, type: :request do
  let(:company) { create(:company) }
  let(:user) { create(:user, company:) }
  let(:token) { Auth::TokenService.new(user:).encode_token.token }

  before do
    user
    token
  end

  describe 'show' do
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

    it 'returns insights' do
      get_with_token(token, '/admin/insights')

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:insights].count).to eq(2)
        expect(json[:insights][0][:campaign_id]).to eq(campaign.id)
        expect(json[:insights][0][:campaign_subject]).to eq(campaign.subject)
        expect(json[:insights][0][:dispatched_date]).to eq(campaign.starting_at.to_date.to_s)
        expect(json[:insights][0][:total_contacts]).to eq(3)
        expect(json[:insights][0][:unsubscribe_percentage]).to eq(33.33)
        expect(json[:insights][0][:open_rate]).to eq(0.25)

        expect(json[:insights][1][:campaign_id]).to eq(campaign2.id)
        expect(json[:insights][1][:campaign_subject]).to eq(campaign2.subject)
        expect(json[:insights][1][:dispatched_date]).to eq(campaign2.starting_at.to_date.to_s)
        expect(json[:insights][1][:total_contacts]).to eq(2)
        expect(json[:insights][1][:unsubscribe_percentage]).to eq(0.0)
        expect(json[:insights][1][:open_rate]).to eq(0.25)
      end
    end
  end
end
