# frozen_string_literal: true

module Lists
  class UpdateService < BaseService
    def initialize(list:, params:)
      @list = list
      @params = params

      super()
    end

    def call
      return result.not_found_error!(resource: 'list') unless list

      list.name = params[:name] if params.key?(:name)
      list.save!

      result.list = list
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :list, :params
  end
end
