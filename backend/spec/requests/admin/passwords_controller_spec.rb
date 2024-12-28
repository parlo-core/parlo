# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::PasswordsController, type: :request do
  let(:company) { create(:company) }
  let(:user) { create(:user, company:) }

  before { user }

  describe 'forgot' do
    let(:params) do
      {
        email: user.email
      }
    end

    it 'sends reset email' do
      post_with_token(nil, '/admin/passwords/forgot', params)

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:message]).to eq('Password reset email sent')
      end
    end

    context 'when email is invalid' do
      let(:params) do
        {
          email: 'invalid@example.com'
        }
      end

      it 'returns not found error' do
        post_with_token(nil, '/admin/passwords/forgot', params)

        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'reset' do
    let(:params) do
      {
        token: user.reset_password_token,
        password: 'ThisIsNewPassword123321k!#'
      }
    end
    let(:old_password) { 'ThisIsPasssword1#' }

    before { user.generate_password_reset_token! }

    it 'changes password successfully' do
      post_with_token(nil, '/admin/passwords/reset', params)

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:message]).to eq('Password successfully updated')
        expect(user.reload.authenticate(old_password)).not_to eq(user)
        expect(user.reload.authenticate(params[:password])).to eq(user)
      end
    end

    context 'when token is invalid' do
      let(:params) do
        {
          token: "#{user.reset_password_token}-invalid",
          password: 'ThisIsNewPassword123321k!#'
        }
      end

      it 'returns not found error' do
        post_with_token(nil, '/admin/passwords/reset', params)

        expect(response).to have_http_status(:not_found)
      end
    end

    context 'when token has been expired' do
      let(:params) do
        {
          token: user.reset_password_token,
          password: 'ThisIsNewPassword123321k!#'
        }
      end

      before { user.update!(reset_password_sent_at: 5.hours.ago) }

      it 'returns validation error' do
        post_with_token(nil, '/admin/passwords/reset', params)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'when password is empty' do
      let(:params) do
        {
          token: user.reset_password_token,
          password: ''
        }
      end

      it 'returns validation error' do
        post_with_token(nil, '/admin/passwords/reset', params)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'when password is nil' do
      let(:params) do
        {
          token: user.reset_password_token,
          password: nil
        }
      end

      it 'returns validation error' do
        post_with_token(nil, '/admin/passwords/reset', params)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
