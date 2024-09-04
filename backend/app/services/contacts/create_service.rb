# frozen_string_literal: true

module Contacts
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      contact = Contact.new(
        name: params[:name],
        email: params[:email],
        status: params[:status] == 'unsubscribed' ? 'unsubscribed' : 'subscribed',
        company_id: params[:company_id]
      )
      contact.list_id = params[:list_id] if params[:list_id]
      contact.save!

      result.contact = contact
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :params
  end
end
