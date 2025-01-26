# frozen_string_literal: true

module Admin
  class PasswordsController < BaseController
    skip_before_action :authenticate, only: %i[forgot reset]

    def forgot
      user = User.find_by(email: params[:email])

      if user
        user.generate_password_reset_token!

        path = Rails.root.join('app/views/password_mailer/send_reset_email.html').to_s
        result = Emails::RenderService.new(
          template: File.read(path),
          placeholders: {
            name: user.first_name,
            reset_link: "https://app.getparlo.io/reset-password?token=#{user.reset_password_token}"
          }
        ).call
        SendEmailJob.perform_later(
          sender: ENV['DEFAULT_FROM_EMAIL'],
          recipient: user.email,
          subject: 'Password Reset Instructions',
          body: result.template
        )

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
