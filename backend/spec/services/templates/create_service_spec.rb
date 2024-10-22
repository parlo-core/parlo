# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Templates::CreateService, type: :service do
  subject(:create_service) { described_class.new(params:) }

  let(:company) { create(:company) }
  let(:params) do
    {
      name: 'template-worldwide',
      content: '<div>This is headline</div>',
      parent: true,
      company_id: company.id
    }
  end

  context 'when params are passed correctly' do
    it 'creates template' do
      result = create_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.template.name).to eq('template-worldwide')
        expect(result.template.content).to eq('<div>This is headline</div>')
      end
    end
  end

  context 'when template name already exists in the company scope' do
    let(:template) { create(:template, name: 'template-worldwide', company:) }

    before { template }

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

  context 'when template name is nil' do
    let(:params) do
      {
        name: nil,
        content: '<div>This is headline</div>',
        parent: true,
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
