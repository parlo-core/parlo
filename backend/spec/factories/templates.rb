# frozen_string_literal: true

FactoryBot.define do
  factory :template do
    company
    name { 'template_1' }
    parent { true }
    content { '<div>This is headline!</div>' }
  end
end
