# frozen_string_literal: true

module Contacts
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      contact = Contact.create!(
        name: params[:name],
        email: params[:email],
        status: params[:status] == 'unsubscribed' ? 'unsubscribed' : 'subscribed',
        company_id: params[:company_id],
        list_id: params[:list_id]
      )

      result.contact = contact
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :params
  end
end
