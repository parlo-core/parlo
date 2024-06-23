# frozen_string_literal: true

class ParloNotFoundError < StandardError
  attr_reader :resource

  def initialize(resource:)
    @resource = resource

    super("#{resource}_not_found")
  end
end
