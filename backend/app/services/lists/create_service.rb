# frozen_string_literal: true

module Lists
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      list = List.create!(name: params[:name], company_id: params[:company_id])

      result.list = list
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :params
  end
end
