# frozen_string_literal: true

class Contact < ApplicationRecord
  belongs_to :company
  belongs_to :list, optional: true

  validates :name, :email, presence: true
  validates :email, uniqueness: true
  validates :email, email: true

  STATUSES = %i[
    subscribed
    unsubscribed
  ].freeze

  enum status: STATUSES
end
