# frozen_string_literal: true

module Contacts
  class DestroyService < BaseService
    def initialize(contact:)
      @contact = contact

      super()
    end

    def call
      return result.not_found_error!(resource: 'contact') unless contact

      contact.destroy!

      result.contact = contact
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :contact
  end
end
