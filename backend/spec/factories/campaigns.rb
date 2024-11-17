# frozen_string_literal: true

FactoryBot.define do
  factory :campaign do
    sequence(:subject) { |n| "Campaign Subject #{n}" }
    from_name { 'Mark Doe' }
    from_email { 'jdoe@example.com' }
    company
    list
    template
  end
end
