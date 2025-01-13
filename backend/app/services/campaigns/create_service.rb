# frozen_string_literal: true

module Campaigns
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      return result.validation_error!(messages: [field: :starting_at, code: 'invalid_value']) unless valid_starting_at?
      return result.validation_error!(messages: [field: :list_ids, code: 'invalid_value']) if params[:list_ids].blank?

      ActiveRecord::Base.transaction do
        template = Template.create!(
          name: "Campaign template: #{params[:subject]}",
          content: params[:content],
          parent: false,
          company_id: params[:company_id]
        )

        campaign = Campaign.create!(
          subject: params[:subject],
          from_name: params[:from_name],
          from_email: params[:from_email],
          starting_at: params[:starting_at],
          template:,
          company_id: params[:company_id]
        )

        params[:list_ids].each do |li|
          CampaignList.create!(campaign_id: campaign.id, list_id: li)
        end

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
        result.campaign = campaign
      rescue ActiveRecord::RecordInvalid => e
        result.record_validation_error!(record: e.record)
      rescue ActiveRecord::InvalidForeignKey => _e
        result.validation_error!(messages: [field: :list_ids, code: 'invalid_foreign_key'])
      end

      result
    end

    private

    attr_reader :params

    def valid_starting_at?
      return true if params[:starting_at].blank?
      return true if valid_format?(params[:starting_at]) && starting_at > Time.current

      false
    end

    def valid_format?(datetime)
      datetime.respond_to?(:strftime) || datetime.is_a?(String) && DateTime.iso8601(datetime.to_s)
    rescue ArgumentError
      false
    end

    def starting_at
      @starting_at ||= if params[:starting_at].is_a?(String)
                         DateTime.iso8601(params[:starting_at])
                       else
                         params[:starting_at]
                       end
    end
  end
end
