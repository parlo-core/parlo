# frozen_string_literal: true

FactoryBot.define do
  factory :campaign do
    sequence(:subject) { |n| "Campaign Subject #{n}" }
    from_name { 'Mark Doe' }
    from_email { 'jdoe@example.com' }
    starting_at { Time.current + 5.days }
    company
    template
  end
end
