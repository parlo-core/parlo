# frozen_string_literal: true

class CreateCompanies < ActiveRecord::Migration[7.1]
  def change
    create_table :companies, id: :uuid do |t|
      t.string 'name'

      t.timestamps
    end

    add_reference :users, :company, type: :uuid, null: false, foreign_key: true, index: true # rubocop:disable Rails/NotNullColumn
  end
end
