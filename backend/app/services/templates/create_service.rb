# frozen_string_literal: true

module Templates
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      ActiveRecord::Base.transaction do
        template = Template.create!(
          name: params[:name],
          content: params[:content],
          parent: ActiveModel::Type::Boolean.new.cast(params[:parent]),
          company_id: params[:company_id]
        )

        if params[:file_uploads].present?
          params[:file_uploads].each do |file|
            FileUpload.create!(
              file_url: file[:file_url],
              file_name: file[:file_name],
              file_type: file[:file_type],
              file_size: file[:file_size],
              company_id: params[:company_id]
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

    attr_reader :params
  end
end
