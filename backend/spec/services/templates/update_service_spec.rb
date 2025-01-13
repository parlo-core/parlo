# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Templates::UpdateService, type: :service do
  subject(:update_service) { described_class.new(template:, params:) }

  let(:company) { create(:company) }
  let(:template) { create(:template, company:) }
  let(:params) do
    {
      name: 'template-worldwide',
      content: '<p>TT</p>',
      file_uploads: [
        {
          file_url: 'url.example.com',
          file_name: 'test',
          file_type: 'image/jpeg',
          file_size: 1000
        }
      ]
    }
  end

  before { template }

  context 'when params are passed correctly' do
    it 'updates template' do
      result = update_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.template.name).to eq('template-worldwide')
        expect(result.template.content).to eq('<p>TT</p>')
      end
    end

    it 'creates file upload record' do
      expect { update_service.call }.to change(FileUpload, :count).by(1)
    end
  end

  context 'when template name already exists in the company scope' do
    let(:template2) { create(:template, name: 'template-worldwide', company:) }

    before { template2 }

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

  context 'when template name is nil' do
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

  context 'when template cannot be found' do
    let(:template) { nil }

    it 'returns not found error' do
      result = update_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('template')
        expect(result.error.message).to eq('template_not_found')
      end
    end
  end
end
