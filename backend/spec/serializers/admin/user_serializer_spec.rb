# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ::Admin::UserSerializer do
  subject(:serializer) { described_class.new(user, root_name: 'user', token: '123') }

  let(:user) { create(:user) }

  it 'serializes the object' do
    result = JSON.parse(serializer.to_json)

    aggregate_failures do
      expect(result['user']['internal_id']).to eq(user.id)
      expect(result['user']['email']).to eq(user.email)
      expect(result['user']['first_name']).to eq(user.first_name)
      expect(result['user']['last_name']).to eq(user.last_name)
      expect(result['user']['company_name']).to eq(user.company.name)
      expect(result['user']['token']).to eq('123')
    end
  end
end
