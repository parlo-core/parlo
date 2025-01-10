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

        # Sanitize should be extra spec wrapped in async job

        params[:file_uploads].each do |file|
          next if existing_file_uploads.include?(file[:file_url])

          FileUpload.create!(
            file_url: file[:file_url],
            file_name: file[:file_name],
            file_type: file[:file_type],
            file_size: file[:file_size],
            company_id: template.company_id
          )
        end

        result.template = template
      rescue ActiveRecord::RecordInvalid => e
        result.record_validation_error!(record: e.record)
      end

      result
    end

    private

    attr_reader :template, :params

    def existing_file_uploads
      FileUpload.where(company_id: template.company_id).pluck(:file_url)
    end
  end
end
