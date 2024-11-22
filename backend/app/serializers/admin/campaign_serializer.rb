# frozen_string_literal: true

module Admin
  class CampaignSerializer < ResourceSerializer
    def serialize
      payload = {
        id: resource.id,
        subject: resource.subject,
        from_name: resource.from_name,
        from_email: resource.from_email,
        starting_at: resource.starting_at&.iso8601,
        created_at: resource.created_at&.iso8601,
        updated_at: resource.updated_at&.iso8601
      }

      payload = payload.merge(list:)
      payload.merge(template:)
    end

    private

    def list
      ::Admin::ListSerializer.new(
        resource.list
      ).serialize
    end

    def template
      ::Admin::TemplateSerializer.new(
        resource.template
      ).serialize
    end
  end
end
