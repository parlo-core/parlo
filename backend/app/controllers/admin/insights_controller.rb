# frozen_string_literal: true

module Admin
  class InsightsController < BaseController
    def show
      result = Insights::ShowService.new(company: current_company).call

      if result.succeeded?
        records = result.records

        render(
          json: ::CollectionSerializer.new(
            records,
            ::Admin::InsightSerializer,
            collection_name: 'insights'
          )
        )
      else
        render_error_response(result)
      end
    end
  end
end
