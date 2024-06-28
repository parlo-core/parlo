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
end
