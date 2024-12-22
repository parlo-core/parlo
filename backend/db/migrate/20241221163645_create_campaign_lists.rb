# frozen_string_literal: true

class CreateCampaignLists < ActiveRecord::Migration[7.1]
  def change
    create_table :campaign_lists, id: :uuid do |t|
      t.references :campaign, null: false, index: true, foreign_key: true, type: :uuid
      t.references :list, null: false, index: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
