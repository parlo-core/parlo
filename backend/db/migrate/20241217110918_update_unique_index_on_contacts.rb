# frozen_string_literal: true

class UpdateUniqueIndexOnContacts < ActiveRecord::Migration[7.1]
  disable_ddl_transaction!

  def up
    remove_index :contacts, name: 'index_contacts_on_email', algorithm: :concurrently
    add_index :contacts, %i[email list_id], unique: true, algorithm: :concurrently
  end

  def down
    remove_index :contacts, column: %i[email list_id], algorithm: :concurrently
    add_index :contacts, :email, unique: true, algorithm: :concurrently
  end
end
