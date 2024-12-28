# frozen_string_literal: true

class AddResetPasswordFieldsToUsers < ActiveRecord::Migration[7.1]
  def change
    change_table :users, bulk: true do |t|
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
    end

    add_index :users, :email
    add_index :users, :reset_password_token, unique: true
  end
end
