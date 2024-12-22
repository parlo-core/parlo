# frozen_string_literal: true

class List < ApplicationRecord
  belongs_to :company
  has_many :contacts
  has_many :campaign_lists, dependent: :destroy
  has_many :campaigns, through: :campaign_lists

  validates :name, presence: true
  validates :name, uniqueness: { scope: :company_id }

  def self.ransackable_attributes(_auth_object = nil)
    %w[name]
  end
end
