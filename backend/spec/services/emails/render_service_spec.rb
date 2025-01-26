# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Emails::RenderService, type: :service do
  subject(:render_service) { described_class.new(template:, placeholders:) }

  let(:template) do
    '<div><p>This is [name]</p></div>'
  end
  let(:placeholders) do
    {
      name: 'John'
    }
  end

  it 'correctly applies placeholders' do
    result = render_service.call

    aggregate_failures do
      expect(result).to be_succeeded
      expect(result.template).to eq('<div><p>This is John</p></div>')
    end
  end

  context 'with no placeholders' do
    let(:placeholders) { { } }

    it 'correctly handles placeholders' do
      result = render_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.template).to eq('<div><p>This is [name]</p></div>')
      end
    end
  end
end
