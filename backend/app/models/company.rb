# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users
  has_many :lists
  has_many :contacts

  validates :name, presence: true
end
