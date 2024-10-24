# frozen_string_literal: true

module Admin
  class TemplateSerializer < ResourceSerializer
    def serialize
      {
        id: resource.id,
        name: resource.name,
        content: resource.content,
        parent: resource.parent,
        created_at: resource.created_at&.iso8601,
        updated_at: resource.updated_at&.iso8601
      }
    end
  end
end
