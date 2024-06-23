# frozen_string_literal: true

class ParloNotAllowedError < StandardError
  attr_reader :code

  def initialize(code:)
    @code = code

    super(code)
  end
end
