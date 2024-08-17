# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Lists::CreateService, type: :service do
  subject(:create_service) { described_class.new(params:) }

  let(:company) { create(:company) }
  let(:params) do
    {
      name: 'list-worldwide',
      company_id: company.id
    }
  end

  context 'when params are passed correctly' do
    it 'creates list' do
      result = create_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.list.name).to eq('list-worldwide')
      end
    end
  end

  context 'when list name already exists in the company scope' do
    let(:list) { create(:list, name: 'list-worldwide', company:) }

    before { list }

    it 'returns validation error' do
      result = create_service.call

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
        name: nil,
        company_id: company.id
      }
    end

    it 'returns validation error' do
      result = create_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('name')
        expect(result.error.messages.first[:code]).to eq('value_is_mandatory')
      end
    end
  end
end
