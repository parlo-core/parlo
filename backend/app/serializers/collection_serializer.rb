# frozen_string_literal: true

class CollectionSerializer
  attr_reader :collection,
              :resource_serializer,
              :options

  def initialize(collection, resource_serializer, options = {})
    @collection = collection
    @resource_serializer = resource_serializer
    @options = options
  end

  def serialize
    hash = { collection_name => serialize_models }
    hash[:meta] = meta if meta?
    hash
  end

  def to_json(options = {})
    serialize.to_json(options)
  end

  def collection_name
    options.fetch(:collection_name, :data).to_sym
  end

  def meta?
    meta.present?
  end

  def includes?
    options[:includes].present?
  end

  def meta
    options.fetch(:meta, nil)
  end

  def serialize_models
    collection.map do |model|
      resource_serializer.new(model, options).serialize
    end
  end
end
