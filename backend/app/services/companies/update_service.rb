# frozen_string_literal: true

module Companies
  class UpdateService < BaseService
    def initialize(company:, params:)
      @company = company
      @params = params

      super()
    end

    def call
      return result.not_found_error!(resource: 'company') unless company

      company.name = params[:name] if params.key?(:name)
      company.country = params[:country]&.upcase if params.key?(:country)
      company.address_line1 = params[:address_line1] if params.key?(:address_line1)
      company.address_line2 = params[:address_line2] if params.key?(:address_line2)
      company.state = params[:state] if params.key?(:state)
      company.zipcode = params[:zipcode] if params.key?(:zipcode)
      company.city = params[:city] if params.key?(:city)
      company.legal_name = params[:legal_name] if params.key?(:legal_name)
      company.tax_number = params[:tax_number] if params.key?(:tax_number)
      company.save!

      result.company = company
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :company, :params
  end
end
