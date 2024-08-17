# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users
  has_many :lists

  validates :name, presence: true
end
