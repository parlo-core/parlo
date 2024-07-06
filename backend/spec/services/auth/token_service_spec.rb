# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Auth::TokenService, type: :service do
  subject(:token_service) { described_class.new(user:) }

  let(:user) { create(:user) }

  describe '.encode_token' do
    it 'created new token' do
      result = token_service.encode_token

      expect(result.token).to be_present
    end
  end

  describe '.active_user' do
    let(:user) { nil }
    let(:current_user) { create(:user) }
    let(:result) { described_class.new(user: current_user).encode_token }
    let(:token) { result.token }

    context 'when user is logged in' do
      it 'returns active user' do
        result = token_service.active_user(token)

        expect(result.active_user.id).to eq(current_user.id)
      end
    end

    context 'when user is NOT logged in' do
      let(:token) { '123' }

      it 'returns nil' do
        result = token_service.active_user(token)

        expect(result.active_user).to eq(nil)
      end
    end
  end
end
