# frozen_string_literal: true

module Templates
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      template = Template.create!(
        name: params[:name],
        content: params[:content],
        parent: ActiveModel::Type::Boolean.new.cast(params[:parent]),
        company_id: params[:company_id]
      )

      result.template = template
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :params
  end
end
