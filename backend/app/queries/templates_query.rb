# frozen_string_literal: true

class TemplatesQuery < BaseQuery
  def call
    templates = base_scope.result
    templates = templates.order(created_at: :desc).page(page).per(limit)

    result.templates = templates
    result
  end

  private

  def base_scope
    company.templates.ransack(search_params)
  end

  def search_params
    return nil if search_term.blank?

    {
      m: 'or',
      name_cont: search_term
    }
  end
end
