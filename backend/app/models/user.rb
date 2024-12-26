# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  belongs_to :company

  validates :email, presence: true
  validates :password, presence: true, on: :create

  def generate_password_reset_token!
    self.reset_password_token = SecureRandom.urlsafe_base64
    self.reset_password_sent_at = Time.current
    save!
  end

  def password_reset_token_valid?
    reset_password_sent_at > 2.hours.ago
  end

  def clear_password_reset_token!
    self.reset_password_token = nil
    self.reset_password_sent_at = nil
    save!
  end
end
