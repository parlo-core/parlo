# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  subject { described_class.new(email: 'test@example.com', password: 'Example1!', company:) }

  let(:company) { create(:company) }

  describe 'Validations' do
    it 'passes validations if all required attributes are given' do
      expect(subject).to be_valid
    end

    it 'does not pass validations if there is no email' do
      subject.email = nil

      expect(subject).not_to be_valid
    end

    it 'does not pass validations if there is no password' do
      subject.password = nil

      expect(subject).not_to be_valid
    end
  end

  describe '#generate_password_reset_token!' do
    let(:user) { create(:user) }

    before { user }

    it 'successfully populates fields' do
      user.generate_password_reset_token!

      expect(user.reset_password_token).to be_present
      expect(user.reset_password_sent_at).to be_present
    end
  end

  describe '#password_reset_token_valid?' do
    let(:user) { create(:user) }

    before { user }

    it 'returns true' do
      user.generate_password_reset_token!

      expect(user.password_reset_token_valid?).to eq(true)
    end

    context 'when token has expired' do
      it 'returns false' do
        user.generate_password_reset_token!
        user.update!(reset_password_sent_at: 3.hours.ago)

        expect(user.password_reset_token_valid?).to eq(false)
      end
    end
  end

  describe '#clear_password_reset_token!' do
    let(:user) { create(:user) }

    before { user }

    it 'successfully resets fields' do
      user.generate_password_reset_token!
      user.clear_password_reset_token!

      expect(user.reset_password_token).to eq(nil)
      expect(user.reset_password_sent_at).to eq(nil)
    end
  end
end
