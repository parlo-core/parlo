# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Campaign, type: :model do
  subject do
    described_class.new(subject: 'Test Campaign', company:, list:, template:, from_name: 'a', from_email: 'a@ex.com')
  end

  let(:company) { create(:company) }
  let(:list) { create(:list, company:) }
  let(:template) { create(:template, company:) }

  describe 'Validations' do
    it 'passes validations if all required attributes are given' do
      expect(subject).to be_valid
    end

    it 'does not pass validations if there is no subject' do
      subject.subject = nil

      expect(subject).not_to be_valid
    end

    it 'does not pass validations if email is invalid' do
      subject.from_email = 'test@com'

      expect(subject).not_to be_valid
    end
  end
end
