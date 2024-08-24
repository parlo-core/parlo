# frozen_string_literal: true

module Lists
  class DestroyService < BaseService
    def initialize(list:)
      @list = list

      super()
    end

    def call
      return result.not_found_error!(resource: 'list') unless list

      list.destroy!

      result.list = list
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :list
  end
end
