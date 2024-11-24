# frozen_string_literal: true

module Campaigns
  class CreateService < BaseService
    def initialize(params:)
      @params = params

      super()
    end

    def call
      return result.validation_error!(messages: [field: :starting_at, code: 'invalid_value']) unless valid_starting_at?

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
          list_id: params[:list_id],
          template:,
          company_id: params[:company_id]
        )

        result.template = template
        result.campaign = campaign
      rescue ActiveRecord::RecordInvalid => e
        result.record_validation_error!(record: e.record)
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
      datetime.respond_to?(:strftime) || datetime.is_a?(String) && Time.zone.parse(datetime.to_s).present?
    rescue ArgumentError
      false
    end

    def starting_at
      @starting_at ||= if params[:starting_at].is_a?(String)
                         DateTime.strptime(params[:starting_at])
                       else
                         params[:starting_at]
                       end
    end
  end
end
