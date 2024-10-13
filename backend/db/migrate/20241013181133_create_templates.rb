# frozen_string_literal: true

class CreateTemplates < ActiveRecord::Migration[7.1]
  def change
    create_table :templates, id: :uuid do |t|
      t.string :name, null: false
      t.text :content, null: false
      t.boolean :parent, default: true, null: false
      t.references :company, null: false, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
