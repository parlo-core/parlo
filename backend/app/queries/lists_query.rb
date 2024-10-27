# frozen_string_literal: true

class ListsQuery < BaseQuery
  def call
    lists = base_scope.result
    lists = lists.order(created_at: :desc).page(page).per(limit)

    result.lists = lists
    result
  end

  private

  def base_scope
    company.lists.ransack(search_params)
  end

  def search_params
    return nil if search_term.blank?

    {
      m: 'or',
      name_cont: search_term
    }
  end
end
