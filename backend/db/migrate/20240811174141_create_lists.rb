# frozen_string_literal: true

class CreateLists < ActiveRecord::Migration[7.1]
  def change
    create_table :lists, id: :uuid do |t|
      t.references :company, null: false, index: true, foreign_key: true, type: :uuid
      t.string 'name', null: false

      t.timestamps
    end

    add_index :lists, %i[name company_id], unique: true
  end
end
