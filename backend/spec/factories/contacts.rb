# frozen_string_literal: true

FactoryBot.define do
  factory :contact do
    email { 'mark.doe@example.com' }
    name { 'Mark Doe' }
    status { 'subscribed' }
    company
    list
  end
end
