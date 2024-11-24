# frozen_string_literal: true

class Campaign < ApplicationRecord
  belongs_to :company
  belongs_to :list
  belongs_to :template

  validates :subject, presence: true
  validates :from_email, email: true

  def self.ransackable_attributes(_auth_object = nil)
    %w[subject]
  end
end
