# frozen_string_literal: true

module Admin
  class CompaniesController < BaseController
    def show
      render_company(current_company)
    end

    def update
      result = Companies::UpdateService.new(
        company: current_company,
        params: input_params.to_h.deep_symbolize_keys
      ).call

      if result.succeeded?
        render_company(result.company)
      else
        render_error_response(result)
      end
    end

    private

    def input_params
      @input_params ||=
        params.require(:company).permit(
          :name,
          :country,
          :address_line1,
          :address_line2,
          :state,
          :zipcode,
          :city,
          :legal_name,
          :tax_number
        )
    end

    def render_company(company)
      render(
        json: ::Admin::CompanySerializer.new(
          company,
          root_name: 'company'
        )
      )
    end
  end
end
