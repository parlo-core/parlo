# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Campaigns::UpdateService, type: :service do
  subject(:update_service) { described_class.new(campaign:, params:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:template) { create(:template, company:) }
  let(:campaign) { create(:campaign, company:, template:) }
  let(:params) do
    {
      subject: 'New promotion 1',
      from_name: 'Marketing Team 1',
      from_email: 'marketing1@example.com',
      starting_at: Time.current.beginning_of_day + 1.day,
      content: '<p>This is promotion1. Sign up and use 50% discount.</p>'
    }
  end

  before { campaign }

  context 'when params are passed correctly' do
    it 'updates campaign' do
      result = update_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.campaign.subject).to eq(params[:subject])
        expect(result.campaign.from_name).to eq(params[:from_name])
        expect(result.campaign.from_email).to eq(params[:from_email])
        expect(result.campaign.starting_at).to eq(params[:starting_at])

        expect(result.template.content).to eq(params[:content])
      end
    end
  end

  context 'when starting_at is not valid' do
    let(:params) do
      {
        subject: 'New promotion 1',
        from_name: 'Marketing Team 1',
        from_email: 'marketing1@example.com',
        starting_at: Time.current.beginning_of_day - 1.day,
        content: '<p>This is promotion1. Sign up and use 50% discount.</p>'
      }
    end

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('starting_at')
        expect(result.error.messages.first[:code]).to eq('invalid_value')
      end
    end
  end

  context 'when subject is nil' do
    let(:params) do
      {
        subject: nil,
        from_name: 'Marketing Team 1',
        from_email: 'marketing1@example.com',
        starting_at: Time.current.beginning_of_day + 1.day,
        content: '<p>This is promotion1. Sign up and use 50% discount.</p>'
      }
    end

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('subject')
        expect(result.error.messages.first[:code]).to eq('value_is_mandatory')
      end
    end
  end

  context 'when from email is invalid' do
    let(:params) do
      {
        subject: 'New promotion 1',
        from_name: 'Marketing Team 1',
        from_email: 'marketing1@',
        starting_at: Time.current.beginning_of_day + 1.day,
        content: '<p>This is promotion1. Sign up and use 50% discount.</p>'
      }
    end

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('from_email')
        expect(result.error.messages.first[:code]).to eq('invalid_email_format')
      end
    end
  end

  context 'when campaign cannot be found' do
    let(:campaign) { nil }

    it 'returns not found error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('campaign')
        expect(result.error.message).to eq('campaign_not_found')
      end
    end
  end
end
