# frozen_string_literal: true

class CsvImport < ApplicationRecord
  belongs_to :company

  STATUSES = %i[
    pending
    processing
    completed
    failed
  ].freeze

  enum status: STATUSES
end
