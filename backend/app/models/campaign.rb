# frozen_string_literal: true

class Campaign < ApplicationRecord
  belongs_to :company
  belongs_to :template
  has_many :campaign_lists, dependent: :destroy
  has_many :lists, through: :campaign_lists

  validates :subject, presence: true
  validates :from_email, email: true

  def self.ransackable_attributes(_auth_object = nil)
    %w[subject]
  end
end
