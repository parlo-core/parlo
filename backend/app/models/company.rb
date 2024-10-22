# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users
  has_many :lists
  has_many :contacts
  has_many :templates

  validates :name, presence: true
end
