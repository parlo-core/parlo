# frozen_string_literal: true

module Admin
  class UsersController < BaseController
    skip_before_action :authenticate, only: :create

    def create
      result = Users::RegisterService.new(params: create_params.to_h.deep_symbolize_keys).create_user_and_company

      if result.succeeded?
        token = Auth::TokenService.new(user: result.user).encode_token.token

        render_user(result.user, token)
      else
        render_error_response(result)
      end
    end

    def show
      render_user_without_token(active_user)
    end

    private

    def create_params
      @create_params ||=
        params.require(:user).permit(
          :email,
          :password,
          :company_name,
          :first_name,
          :last_name
        )
    end

    def render_user(user, token)
      render(
        json: ::Admin::UserSerializer.new(
          user,
          root_name: 'user',
          token:
        )
      )
    end

    def render_user_without_token(user)
      render(
        json: ::Admin::UserSerializer.new(
          user,
          root_name: 'user'
        )
      )
    end
  end
end
