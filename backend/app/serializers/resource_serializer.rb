# frozen_string_literal: true

class ResourceSerializer
  attr_reader :resource, :options

  def initialize(resource, options = {})
    @resource = resource
    @options = options
  end

  def serialize
    {}
  end

  def to_json(options = {})
    {
      root_name => serialize
    }.to_json(options)
  end

  def root_name
    options.fetch(:root_name, :data)
  end
end
