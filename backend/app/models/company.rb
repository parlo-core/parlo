# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users
  has_many :lists
  has_many :contacts
  has_many :templates
  has_many :campaigns
  has_many :file_uploads

  validates :name, presence: true
  validates :country, country_code: true, unless: -> { country.nil? }
end
