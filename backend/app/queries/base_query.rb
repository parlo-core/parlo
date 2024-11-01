# frozen_string_literal: true

class BaseQuery < BaseService
  def initialize(company:, search_term:, page:, limit:, filters: {})
    @company = company
    @search_term = search_term
    @page = page
    @limit = limit
    @filters = filters

    super()
  end

  private

  attr_reader :company, :search_term, :page, :limit, :filters
end
