# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::UsersController, type: :request do
  describe 'POST /users' do
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

    context 'when user and company are created successfully' do
      it 'returns 200 OK with the user' do
        post_with_token(nil, '/admin/users', { user: params })

        aggregate_failures do
          expect(response.status).to be(200)
          expect(json[:user][:internal_id]).to be_present
          expect(json[:user][:email]).to eq(email)
          expect(json[:user][:first_name]).to eq('John')
          expect(json[:user][:last_name]).to eq('Doe')
          expect(json[:user][:token]).to be_present

          company = User.find_by(email:).company

          expect(company.name).to eq('Corp 1')
        end
      end
    end

    context 'when user already exists' do
      before do
        create(:user, email: 'test@example.com')
      end

      it 'returns 422 status code' do
        post_with_token(nil, '/admin/users', { user: params })

        aggregate_failures do
          expect(response.status).to be(422)
          expect(json[:error]).to eq('Unprocessable Entity')
          expect(json[:code]).to eq('validation_errors')
        end
      end
    end
  end
end
