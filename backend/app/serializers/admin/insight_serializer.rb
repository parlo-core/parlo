# frozen_string_literal: true

module Admin
  class InsightSerializer < ResourceSerializer
    def serialize
      {
        campaign_id: resource[:campaign_id],
        campaign_subject: resource[:campaign_subject],
        dispatched_date: resource[:dispatched_date].to_date,
        total_contacts: resource[:total_contacts],
        unsubscribe_percentage: resource[:unsubscribe_percentage],
        open_rate: 0.25 # TODO
      }
    end
  end
end
