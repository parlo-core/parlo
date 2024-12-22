# frozen_string_literal: true

class Template < ApplicationRecord
  belongs_to :company
  has_many :campaigns

  validates :name, presence: true
  validates :name, uniqueness: { scope: :company_id }

  def self.ransackable_attributes(_auth_object = nil)
    %w[name]
  end
end
