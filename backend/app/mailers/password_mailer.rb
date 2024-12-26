# frozen_string_literal: true

class PasswordMailer < ApplicationMailer
  def send_reset_email
    @user = params[:user]
    @reset_link = "https://app.getparlo.io/reset-password?token=#{@user.reset_password_token}"

    mail(
      to: @user.email,
      subject: 'Password Reset Instructions'
    )
  end
end
