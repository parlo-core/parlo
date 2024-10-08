# frozen_string_literal: true

module Admin
  class ListSerializer < ResourceSerializer
    def serialize
      {
        id: resource.id,
        name: resource.name,
        created_at: resource.created_at&.iso8601,
        updated_at: resource.updated_at&.iso8601
      }
    end
  end
end
