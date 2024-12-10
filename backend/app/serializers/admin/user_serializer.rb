# frozen_string_literal: true

module Admin
  class UserSerializer < ResourceSerializer
    def serialize
      payload = {
        id: resource.id,
        first_name: resource.first_name,
        last_name: resource.last_name,
        email: resource.email,
        company_name: resource.company.name
      }

      payload[:token] = options[:token] if options.key?(:token)

      payload
    end
  end
end
