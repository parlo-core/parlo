# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Company, type: :model do
  subject { described_class.new(name: 'Test Company') }

  describe 'Validations' do
    it 'passes validations if all required attributes are given' do
      expect(subject).to be_valid
    end

    it 'does not pass validations if there is no name' do
      subject.name = nil

      expect(subject).not_to be_valid
    end
  end
end
