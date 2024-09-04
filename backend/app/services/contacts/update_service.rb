# frozen_string_literal: true

module Contacts
  class UpdateService < BaseService
    def initialize(contact:, params:)
      @contact = contact
      @params = params

      super()
    end

    def call
      return result.not_found_error!(resource: 'contact') unless contact

      contact.name = params[:name] if params.key?(:name)
      contact.email = params[:email] if params.key?(:email)
      contact.status = params[:status] == 'unsubscribed' ? 'unsubscribed' : 'subscribed' if params.key?(:status)
      contact.save!

      result.contact = contact
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :contact, :params
  end
end
