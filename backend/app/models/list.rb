# frozen_string_literal: true

class List < ApplicationRecord
  belongs_to :company

  validates :name, presence: true
  validates :name, uniqueness: { scope: :company_id }
end
