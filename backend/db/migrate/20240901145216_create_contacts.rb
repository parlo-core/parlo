# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration[7.1]
  def change
    create_table :contacts, id: :uuid do |t|
      t.string :name, null: false
      t.string :email, null: false, index: { unique: true }
      t.integer :status, default: 0, null: false
      t.jsonb :properties, default: {}, null: false
      t.references :company, null: false, index: true, foreign_key: true, type: :uuid
      t.references :list, null: true, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
