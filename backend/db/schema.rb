# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_12_21_163645) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "campaign_lists", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "campaign_id", null: false
    t.uuid "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_campaign_lists_on_campaign_id"
    t.index ["list_id"], name: "index_campaign_lists_on_list_id"
  end

  create_table "campaigns", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "subject", null: false
    t.string "from_name", null: false
    t.string "from_email", null: false
    t.datetime "starting_at"
    t.uuid "template_id", null: false
    t.uuid "company_id", null: false
    t.jsonb "properties", default: {}, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_campaigns_on_company_id"
    t.index ["template_id"], name: "index_campaigns_on_template_id"
  end

  create_table "companies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "country"
    t.string "address_line1"
    t.string "address_line2"
    t.string "state"
    t.string "zipcode"
    t.string "city"
    t.string "legal_name"
    t.string "tax_number"
  end

  create_table "contacts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.integer "status", default: 0, null: false
    t.jsonb "properties", default: {}, null: false
    t.uuid "company_id", null: false
    t.uuid "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_contacts_on_company_id"
    t.index ["email", "list_id"], name: "index_contacts_on_email_and_list_id", unique: true
    t.index ["list_id"], name: "index_contacts_on_list_id"
  end

  create_table "csv_imports", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.string "file_path"
    t.uuid "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_csv_imports_on_company_id"
  end

  create_table "lists", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "company_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_lists_on_company_id"
    t.index ["name", "company_id"], name: "index_lists_on_name_and_company_id", unique: true
  end

  create_table "templates", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.text "content", null: false
    t.boolean "parent", default: true, null: false
    t.uuid "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_templates_on_company_id"
    t.index ["name", "company_id"], name: "index_templates_on_name_and_company_id", unique: true
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "company_id", null: false
    t.index ["company_id"], name: "index_users_on_company_id"
  end

  add_foreign_key "campaign_lists", "campaigns"
  add_foreign_key "campaign_lists", "lists"
  add_foreign_key "campaigns", "companies"
  add_foreign_key "campaigns", "templates"
  add_foreign_key "contacts", "companies"
  add_foreign_key "contacts", "lists"
  add_foreign_key "csv_imports", "companies"
  add_foreign_key "lists", "companies"
  add_foreign_key "templates", "companies"
  add_foreign_key "users", "companies"
end
