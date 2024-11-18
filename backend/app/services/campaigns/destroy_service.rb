# frozen_string_literal: true

module Campaigns
  class DestroyService < BaseService
    def initialize(campaign:)
      @campaign = campaign

      super()
    end

    def call
      return result.not_found_error!(resource: 'campaign') unless campaign

      campaign.destroy!

      result.campaign = campaign
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :campaign
  end
end
