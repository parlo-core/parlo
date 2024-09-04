# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contact, type: :model do
  subject { described_class.new(name: 'Test List', email: 'test@example.com', company:) }

  let(:company) { create(:company) }

  describe 'Validations' do
    it 'passes validations if all required attributes are given' do
      expect(subject).to be_valid
    end

    it 'does not pass validations if there is no name' do
      subject.name = nil

      expect(subject).not_to be_valid
    end

    it 'does not pass validations if there is no email' do
      subject.email = nil

      expect(subject).not_to be_valid
    end

    it 'does not pass validations if email is invalid' do
      subject.email = 'test@com'

      expect(subject).not_to be_valid
    end
  end
end
