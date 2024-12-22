# frozen_string_literal: true

class Contact < ApplicationRecord
  belongs_to :company
  belongs_to :list

  validates :name, :email, presence: true
  validates :email, uniqueness: { scope: :list_id }
  validates :email, email: true

  STATUSES = %i[
    subscribed
    unsubscribed
  ].freeze

  enum status: STATUSES

  def self.ransackable_attributes(_auth_object = nil)
    %w[name email]
  end
end
