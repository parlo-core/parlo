# frozen_string_literal: true

class ChangeColumnNullOnContacts < ActiveRecord::Migration[7.1]
  def change
    change_column_null :contacts, :list_id, false
  end
end
