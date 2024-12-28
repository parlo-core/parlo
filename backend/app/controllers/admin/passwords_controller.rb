# frozen_string_literal: true

module Admin
  class PasswordsController < BaseController
    skip_before_action :authenticate, only: %i[forgot reset]

    def forgot
      user = User.find_by(email: params[:email])

      if user
        user.generate_password_reset_token!

        PasswordMailer.with(user:).send_reset_email.deliver_later

        render json: { message: 'Password reset email sent' }, status: :ok
      else
        not_found_error(resource: 'user')
      end
    end

    def reset
      user = User.find_by(reset_password_token: params[:token])

      result = Passwords::ResetService.new(user:, new_password: params[:password]).call

      if result.succeeded?
        render json: { message: 'Password successfully updated' }, status: :ok
      else
        render_error_response(result)
      end
    end
  end
end
