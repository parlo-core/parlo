# frozen_string_literal: true

module Admin
  class CampaignsController < BaseController
    def create
      result = Campaigns::CreateService.new(
        params: input_params.to_h.deep_symbolize_keys.merge(company_id: current_company.id)
      ).call

      if result.succeeded?
        render_campaign(result.campaign)
      else
        render_error_response(result)
      end
    end

    def show
      campaign = current_company.campaigns.find_by(id: params[:id])

      return not_found_error(resource: 'campaign') unless campaign

      render_campaign(campaign)
    end

    def update
      campaign = current_company.campaigns.find_by(id: params[:id])
      result = Campaigns::UpdateService.new(campaign:, params: input_params.to_h.deep_symbolize_keys).call

      if result.succeeded?
        render_campaign(result.campaign)
      else
        render_error_response(result)
      end
    end

    def destroy
      campaign = current_company.campaigns.find_by(id: params[:id])
      result = Campaigns::DestroyService.new(campaign:).call

      if result.succeeded?
        render_campaign(result.campaign)
      else
        render_error_response(result)
      end
    end

    def index
      campaigns = CampaignsQuery.new(
        company: current_company,
        search_term: params[:search_term],
        page: params[:page],
        limit: params[:per_page] || PER_PAGE
      ).call.campaigns

      render(
        json: ::CollectionSerializer.new(
          campaigns,
          ::Admin::CampaignSerializer,
          collection_name: 'campaigns',
          meta: pagination_metadata(campaigns)
        )
      )
    end

    private

    def input_params
      @input_params ||=
        params.require(:campaign).permit(
          :subject,
          :from_name,
          :from_email,
          :starting_at,
          :content,
          list_ids: [],
          file_uploads: %i[
            file_url
            file_name
            file_type
            file_size
          ]
        )
    end

    def render_campaign(campaign)
      render(
        json: ::Admin::CampaignSerializer.new(
          campaign,
          root_name: 'campaign'
        )
      )
    end
  end
end
