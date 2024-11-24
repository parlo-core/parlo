# frozen_string_literal: true

module Campaigns
  class UpdateService < BaseService
    def initialize(campaign:, params:)
      @campaign = campaign
      @params = params

      super()
    end

    def call
      return result.not_found_error!(resource: 'campaign') unless campaign
      return result.validation_error!(messages: [field: :starting_at, code: 'invalid_value']) unless valid_starting_at?

      ActiveRecord::Base.transaction do
        template = campaign.template
        template.content = params[:content] if params.key?(:content)

        campaign.subject = params[:subject] if params.key?(:subject)
        campaign.from_name = params[:from_name] if params.key?(:from_name)
        campaign.from_email = params[:from_email] if params.key?(:from_email)
        campaign.starting_at = params[:starting_at] if params.key?(:starting_at)

        template.save!
        campaign.save!

        result.template = template
        result.campaign = campaign
      rescue ActiveRecord::RecordInvalid => e
        result.record_validation_error!(record: e.record)
      end

      result
    end

    private

    attr_reader :campaign, :params

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
