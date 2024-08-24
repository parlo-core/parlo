# frozen_string_literal: true

module Admin
  class ListSerializer < ResourceSerializer
    def serialize
      {
        name: resource.name
      }
    end
  end
end
