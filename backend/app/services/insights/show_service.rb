# frozen_string_literal: true

module Insights
  class ShowService < BaseService
    def initialize(company:)
      @company = company

      super()
    end

    def call
      records = Rails.cache.fetch(cache_key, expires_in: 12.hours) do
        fetch_campaign_insights
      end

      result.records = records
      result
    end

    private

    attr_reader :company

    def cache_key
      [
        'campaign_insights',
        Date.current.strftime('%Y-%m-%d'),
        company.id
      ].join('/')
    end

    # rubocop:disable Layout/LineLength
    def fetch_campaign_insights
      Campaign
        .joins('INNER JOIN campaign_lists ON campaign_lists.campaign_id = campaigns.id')
        .joins('INNER JOIN lists ON lists.id = campaign_lists.list_id')
        .joins('INNER JOIN contacts ON contacts.list_id = lists.id')
        .where('campaigns.company_id = ?', company.id)
        .select(
          'campaigns.id AS campaign_id',
          'campaigns.subject AS campaign_subject',
          'campaigns.starting_at AS dispatched_date',
          'COUNT(DISTINCT contacts.email) AS total_contacts',
          'COUNT(DISTINCT CASE WHEN contacts.status = 1 THEN contacts.email END)::float / COUNT(DISTINCT contacts.email)::float * 100 AS unsubscribe_percentage'
        )
        .where('campaigns.starting_at IS NOT NULL')
        .group('campaigns.id')
        .order(starting_at: :desc)
        .limit(10)
        .map do |campaign|
        {
          campaign_id: campaign.campaign_id,
          campaign_subject: campaign.campaign_subject,
          dispatched_date: campaign.dispatched_date,
          total_contacts: campaign.total_contacts,
          unsubscribe_percentage: campaign.unsubscribe_percentage.to_f.round(2),
          open_rate: 0.25 # Placeholder for future implementation
        }
      end
    end
    # rubocop:enable Layout/LineLength
  end
end
