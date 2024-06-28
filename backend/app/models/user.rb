# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  belongs_to :company

  validates :email, :password, presence: true
end
