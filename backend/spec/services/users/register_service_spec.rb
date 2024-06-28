# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Users::RegisterService, type: :service do
  subject(:register_service) { described_class.new(params:) }

  let(:email) { 'test@example.com' }
  let(:params) do
    {
      email:,
      password: 'ThisIsPassword5#',
      first_name: 'John',
      last_name: 'Doe',
      company_name: 'Corp 1'
    }
  end

  context 'when email is unique and params are passed correctly' do
    it 'creates user and company' do
      result = register_service.create_user_and_company

      aggregate_failures do
        expect(result).to be_succeeded
        expect(result.user.email).to eq(params[:email])
        expect(result.user.first_name).to eq(params[:first_name])
        expect(result.user.last_name).to eq(params[:last_name])
        expect(result.company.name).to eq(params[:company_name])
      end
    end
  end

  context 'when email already exists' do
    let(:user) { create(:user, email:) }

    before { user }

    it 'returns validation error' do
      result = register_service.create_user_and_company

      aggregate_failures do
        expect(result).not_to be_succeeded
        expect(result.error).to be_a(ParloValidationError)
        expect(result.error.messages.first[:field].to_s).to eq('email')
        expect(result.error.messages.first[:code]).to eq('already_exists')
      end
    end
  end
end
