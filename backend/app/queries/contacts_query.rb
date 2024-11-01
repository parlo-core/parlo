# frozen_string_literal: true

class ContactsQuery < BaseQuery
  def call
    contacts = base_scope.result
    contacts = contacts.where(list_id: filters[:list_id]) if filters[:list_id]
    contacts = contacts.order(created_at: :desc).page(page).per(limit)

    result.contacts = contacts
    result
  end

  private

  def base_scope
    company.contacts.ransack(search_params)
  end

  def search_params
    return nil if search_term.blank?

    {
      m: 'or',
      name_cont: search_term,
      email_cont: search_term
    }
  end
end
