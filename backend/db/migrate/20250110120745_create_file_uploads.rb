# frozen_string_literal: true

class CreateFileUploads < ActiveRecord::Migration[7.1]
  def change
    create_table :file_uploads, id: :uuid do |t|
      t.references :company, null: false, index: true, foreign_key: true, type: :uuid
      t.string :file_url, null: false
      t.string :file_name, null: false
      t.string :file_type, null: false
      t.integer :file_size, null: true

      t.timestamps
    end
  end
end
