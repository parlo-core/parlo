# frozen_string_literal: true

module Templates
  class UpdateService < BaseService
    def initialize(template:, params:)
      @template = template
      @params = params

      super()
    end

    def call
      return result.not_found_error!(resource: 'template') unless template

      ActiveRecord::Base.transaction do
        template.name = params[:name] if params.key?(:name)
        template.content = params[:content] if params.key?(:content)
        template.save!

        # Only new uploads created with update
        # Sanitize should be an action wrapped in async job
        if params[:file_uploads].present?
          params[:file_uploads].each do |file|
            FileUpload.create!(
              file_url: file[:file_url],
              file_name: file[:file_name],
              file_type: file[:file_type],
              file_size: file[:file_size],
              company_id: template.company_id
            )
          end
        end

        result.template = template
      rescue ActiveRecord::RecordInvalid => e
        result.record_validation_error!(record: e.record)
      end

      result
    end

    private

    attr_reader :template, :params
  end
end
