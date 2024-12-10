# frozen_string_literal: true

class AddMoreFieldsToCompanies < ActiveRecord::Migration[7.1]
  def change
    change_table :companies, bulk: true do |t|
      t.string :country
      t.string :address_line1
      t.string :address_line2
      t.string :state
      t.string :zipcode
      t.string :city
      t.string :legal_name
      t.string :tax_number
    end
  end
end
