# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    company
    email { 'john.clark@example.com' }
    password { 'ThisIsPasssword1#' }
    first_name { 'John' }
    last_name { 'Clark' }
  end
end
