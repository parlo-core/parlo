# frozen_string_literal: true

module Templates
  class DestroyService < BaseService
    def initialize(template:)
      @template = template

      super()
    end

    def call
      return result.not_found_error!(resource: 'template') unless template

      template.destroy!

      result.template = template
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :template
  end
end
