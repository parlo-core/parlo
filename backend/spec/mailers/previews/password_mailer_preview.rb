# frozen_string_literal: true

# Preview all emails at http://localhost:3000/rails/mailers/password_mailer
class PasswordMailerPreview < ActionMailer::Preview
  def send_reset_email
    user = User.first
    user.generate_password_reset_token!

    PasswordMailer.with(user:).send_reset_email
  end
end
