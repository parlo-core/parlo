# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Campaigns::CreateService, type: :service do
  subject(:create_service) { described_class.new(params:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:params) do
    {
      subject: 'New promotion',
      from_name: 'Marketing Team',
      from_email: 'marketing@example.com',
      starting_at: Time.current.beginning_of_day + 1.day,
      company_id: company.id,
      list_id: list.id,
      content: '<p>This is promotion. Sign up and use 50% discount.</p>'
    }
  end

  context 'when params are passed correctly' do
    it 'creates campaign' do
      result = create_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.campaign.subject).to eq(params[:subject])
        expect(result.campaign.from_name).to eq(params[:from_name])
        expect(result.campaign.from_email).to eq(params[:from_email])
        expect(result.campaign.starting_at).to eq(params[:starting_at])
        expect(result.campaign.company_id).to eq(params[:company_id])
        expect(result.campaign.list_id).to eq(params[:list_id])

        expect(result.template.content).to eq(params[:content])
        expect(result.template.parent).to eq(false)
        expect(result.template.name).to eq("Campaign template: #{params[:subject]}")
        expect(result.template.company_id).to eq(params[:company_id])
      end
    end
  end

  context 'when starting_at is not valid' do
    let(:params) do
      {
        subject: 'New promotion',
        from_name: 'Marketing Team',
        from_email: 'marketing@',
        starting_at: Time.current.beginning_of_day - 1.day,
        company_id: company.id,
        list_id: list.id,
        content: '<p>This is promotion. Sign up and use 50% discount.</p>'
      }
    end

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('starting_at')
        expect(result.error.messages.first[:code]).to eq('invalid_value')
      end
    end
  end

  context 'when from email is invalid' do
    let(:params) do
      {
        subject: 'New promotion',
        from_name: 'Marketing Team',
        from_email: 'marketing@',
        starting_at: Time.current.beginning_of_day + 1.day,
        company_id: company.id,
        list_id: list.id,
        content: '<p>This is promotion. Sign up and use 50% discount.</p>'
      }
    end

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('from_email')
        expect(result.error.messages.first[:code]).to eq('invalid_email_format')
      end
    end
  end

  context 'when subject is nil' do
    let(:params) do
      {
        subject: nil,
        from_name: 'Marketing Team',
        from_email: 'marketing@example.com',
        starting_at: Time.current.beginning_of_day + 1.day,
        company_id: company.id,
        list_id: list.id,
        content: '<p>This is promotion. Sign up and use 50% discount.</p>'
      }
    end

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('subject')
        expect(result.error.messages.first[:code]).to eq('value_is_mandatory')
      end
    end
  end
end
