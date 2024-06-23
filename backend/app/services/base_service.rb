# frozen_string_literal: true

require 'ostruct'

class BaseService
  class Result < OpenStruct
    attr_reader :error

    def initialize
      super

      @succeeded = true
      @error = nil
    end

    def succeeded?
      succeeded
    end

    def validation_error!(messages:)
      @succeeded = false
      @error = ::ParloValidationError.new(messages:)

      self
    end

    def not_found_error!(resource:)
      @succeeded = false
      @error = ::ParloNotFoundError.new(resource:)

      self
    end

    def not_allowed_error!(code:)
      @succeeded = false
      @error = ::ParloNotAllowedError.new(code:)

      self
    end

    def fetch_or_raise!
      return self if succeeded?

      raise(error)
    end

    private

    attr_accessor :succeeded
  end

  def initialize
    @result = Result.new
  end

  private

  attr_reader :result
end
