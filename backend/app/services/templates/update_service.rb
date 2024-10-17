# frozen_string_literal: true

module Templates
  class UpdateService < BaseService
    def initialize(template:, params:)
      @template = template
      @params = params

      super()
    end

    def call
      return result.not_found_error!(resource: 'template') unless template

      template.name = params[:name] if params.key?(:name)
      template.content = params[:content] if params.key?(:content)
      template.save!

      result.template = template
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :template, :params
  end
end
