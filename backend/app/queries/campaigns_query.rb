# frozen_string_literal: true

class CampaignsQuery < BaseQuery
  def call
    campaigns = base_scope.result
    campaigns = campaigns.order(created_at: :desc).page(page).per(limit)

    result.campaigns = campaigns
    result
  end

  private

  def base_scope
    company.campaigns.includes(:template, :list).ransack(search_params)
  end

  def search_params
    return nil if search_term.blank?

    {
      m: 'or',
      subject_cont: search_term
    }
  end
end
