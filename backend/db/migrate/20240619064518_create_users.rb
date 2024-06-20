# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    enable_extension 'pgcrypto'

    create_table :users, id: :uuid do |t|
      t.string 'email'
      t.string 'first_name'
      t.string 'last_name'
      t.string 'password_digest'

      t.timestamps
    end
  end
end
