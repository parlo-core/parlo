# frozen_string_literal: true

module Admin
  class ContactSerializer < ResourceSerializer
    def serialize
      {
        name: resource.name,
        status: resource.status,
        email: resource.email,
        created_at: resource.created_at&.iso8601,
        updated_at: resource.updated_at&.iso8601
      }
    end
  end
end
