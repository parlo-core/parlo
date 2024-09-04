# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Lists::DestroyService, type: :service do
  subject(:destroy_service) { described_class.new(list:) }

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }

  before { list }

  context 'when params are passed correctly' do
    it 'removes list' do
      expect { destroy_service.call }.to change(List, :count).by(-1)
    end
  end

  context 'when list cannot be found' do
    let(:list) { nil }

    it 'returns validation error' do
      result = destroy_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('list')
        expect(result.error.message).to eq('list_not_found')
      end
    end
  end
end
