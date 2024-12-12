# frozen_string_literal: true

module Admin
  class CompanySerializer < ResourceSerializer
    def serialize
      {
        id: resource.id,
        name: resource.name,
        country: resource.country,
        address_line1: resource.address_line1,
        address_line2: resource.address_line2,
        state: resource.state,
        zipcode: resource.zipcode,
        city: resource.city,
        legal_name: resource.legal_name,
        tax_number: resource.tax_number,
        created_at: resource.created_at&.iso8601,
        updated_at: resource.updated_at&.iso8601
      }
    end
  end
end
