# frozen_string_literal: true

module Admin
  class AuthController < BaseController
    skip_before_action :authenticate, only: :create

    def create
      user = User.find_by(email: create_params[:email])&.authenticate(create_params[:password])

      if user
        token = Auth::TokenService.new(user:).encode_token.token

        render_user(user, token)
      else
        not_found_error(resource: 'user')
      end
    end

    private

    def create_params
      @create_params ||=
        params.require(:user).permit(
          :email,
          :password
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
  end
end
