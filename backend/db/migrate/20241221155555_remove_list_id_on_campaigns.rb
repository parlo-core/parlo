# frozen_string_literal: true

class RemoveListIdOnCampaigns < ActiveRecord::Migration[7.1]
  def change
    remove_column :campaigns, :list_id, :uuid
  end
end
