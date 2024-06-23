# frozen_string_literal: true

class ParloValidationError < StandardError
  attr_reader :messages

  def initialize(messages:)
    @messages = messages

    super("Validation errors: #{messages&.to_a&.join(', ')}")
  end
end
