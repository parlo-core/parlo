# frozen_string_literal: true

class CreateCampaigns < ActiveRecord::Migration[7.1]
  def change
    create_table :campaigns, id: :uuid do |t|
      t.string :subject, null: false
      t.string :from_name, null: false
      t.string :from_email, null: false
      t.datetime :starting_at, null: true
      t.references :list, null: false, index: true, foreign_key: true, type: :uuid
      t.references :template, null: false, index: true, foreign_key: true, type: :uuid
      t.references :company, null: false, index: true, foreign_key: true, type: :uuid
      t.jsonb :properties, default: {}, null: false

      t.timestamps
    end
  end
end
