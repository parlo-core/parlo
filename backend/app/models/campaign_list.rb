# frozen_string_literal: true

class CampaignList < ApplicationRecord
  belongs_to :campaign
  belongs_to :list
end
