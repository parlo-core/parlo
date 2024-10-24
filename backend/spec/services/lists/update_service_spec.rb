# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Lists::UpdateService, type: :service do
  subject(:update_service) { described_class.new(list:, params:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:params) do
    {
      name: 'list-worldwide'
    }
  end

  before { list }

  context 'when params are passed correctly' do
    it 'updates list' do
      result = update_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.list.name).to eq('list-worldwide')
      end
    end
  end

  context 'when list name already exists in the company scope' do
    let(:list2) { create(:list, name: 'list-worldwide', company:) }

    before { list2 }

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('name')
        expect(result.error.messages.first[:code]).to eq('value_already_exist')
      end
    end
  end

  context 'when list name is nil' do
    let(:params) do
      {
        name: nil
      }
    end

    it 'returns validation error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('name')
        expect(result.error.messages.first[:code]).to eq('value_is_mandatory')
      end
    end
  end

  context 'when list cannot be found' do
    let(:list) { nil }

    it 'returns not found error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('list')
        expect(result.error.message).to eq('list_not_found')
      end
    end
  end
end
