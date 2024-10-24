# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Templates::DestroyService, type: :service do
  subject(:destroy_service) { described_class.new(template:) }

  let(:company) { create(:company) }
  let(:template) { create(:template, company:) }

  before { template }

  context 'when params are passed correctly' do
    it 'removes template' do
      expect { destroy_service.call }.to change(Template, :count).by(-1)
    end
  end

  context 'when template cannot be found' do
    let(:template) { nil }

    it 'returns not found error' do
      result = destroy_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('template')
        expect(result.error.message).to eq('template_not_found')
      end
    end
  end
end
