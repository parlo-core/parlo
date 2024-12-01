# frozen_string_literal: true

class CreateCsvImports < ActiveRecord::Migration[7.1]
  def change
    create_table :csv_imports, id: :uuid do |t|
      t.integer :status, default: 0, null: false
      t.string :file_path
      t.references :company, null: false, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
