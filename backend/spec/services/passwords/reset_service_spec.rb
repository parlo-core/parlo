# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Passwords::ResetService, type: :service do
  subject(:reset_service) { described_class.new(user:, new_password:) }

  let(:company) { create(:company) }
  let(:user) { create(:user, company:) }
  let(:new_password) { 'ThisIs!NewPassword4568%' }
  let(:old_password) { 'ThisIsPasssword1#' }

  before { user.generate_password_reset_token! }

  context 'when params are passed correctly' do
    it 'changes password and resets fields' do
      result = reset_service.call

      aggregate_failures do
        expect(result).to be_succeeded
        expect(user.reload.authenticate(new_password)).to eq(user)
        expect(user.reload.authenticate(old_password)).not_to eq(user)
        expect(result.user.reset_password_token).to eq(nil)
        expect(result.user.reset_password_sent_at).to eq(nil)
      end
    end
  end

  context 'when new password is nil' do
    let(:new_password) { nil }

    it 'returns validation error' do
      result = reset_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('password')
        expect(result.error.messages.first[:code]).to eq('invalid_value')
      end
    end
  end

  context 'when new password is empty string' do
    let(:new_password) { '' }

    it 'returns validation error' do
      result = reset_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('password')
        expect(result.error.messages.first[:code]).to eq('invalid_value')
      end
    end
  end

  context 'when user is nil' do
    it 'returns not found error' do
      result = described_class.new(user: nil, new_password:).call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloNotFoundError)
        expect(result.error.resource).to eq('user')
        expect(result.error.message).to eq('user_not_found')
      end
    end
  end

  context 'when reset token has expired' do
    before do
      user.update!(reset_password_sent_at: 1.day.ago)
    end

    it 'returns validation error' do
      result = reset_service.call

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('reset_password_token')
        expect(result.error.messages.first[:code]).to eq('expired')
      end
    end
  end
end
