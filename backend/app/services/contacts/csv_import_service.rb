# frozen_string_literal: true

require 'csv'

module Contacts
  class CsvImportService < BaseService
    def initialize(file_path:, company_id:, list_id:)
      @file_path = file_path
      @company_id = company_id
      @list_id = list_id

      super()
    end

    def call
      CSV.foreach(file_path, headers: true) do |row|
        create_contact(row)
      end

      result
    end

    private

    attr_reader :file_path, :company_id, :list_id

    def create_contact(row)
      Contact.create!(
        name: row['name'],
        email: row['email'],
        status: row['status'],
        company_id:,
        list_id:
      )
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end
  end
end
