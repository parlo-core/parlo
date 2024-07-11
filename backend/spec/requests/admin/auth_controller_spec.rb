# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::AuthController, type: :request do
  describe 'POST /auth' do
    let(:email) { 'test@example.com' }
    let(:password) { 'ThisIsPassword5#' }
    let(:user) { create(:user, email:, password:) }
    let(:params) do
      {
        email:,
        password:
      }
    end

    before { user }

    context 'when user is logged in successfully' do
      it 'returns 200 OK with the user' do
        post_with_token(nil, '/admin/login', { user: params })

        aggregate_failures do
          expect(response.status).to be(200)
          expect(json[:user][:internal_id]).to be_present
          expect(json[:user][:email]).to eq(email)
          expect(json[:user][:first_name]).to eq(user.first_name)
          expect(json[:user][:last_name]).to eq(user.last_name)
          expect(json[:user][:token]).to be_present
        end
      end
    end

    context 'when email is invalid' do
      let(:params) do
        {
          email: 'invalid@example.com',
          password:
        }
      end

      it 'returns 404 status code' do
        post_with_token(nil, '/admin/login', { user: params })

        aggregate_failures do
          expect(response.status).to be(404)
          expect(json[:error]).to eq('Not Found')
          expect(json[:code]).to eq('user_not_found')
        end
      end
    end

    context 'when password is invalid' do
      let(:params) do
        {
          email:,
          password: 'invalid'
        }
      end

      it 'returns 404 status code' do
        post_with_token(nil, '/admin/login', { user: params })

        aggregate_failures do
          expect(response.status).to be(404)
          expect(json[:error]).to eq('Not Found')
          expect(json[:code]).to eq('user_not_found')
        end
      end
    end
  end
end
