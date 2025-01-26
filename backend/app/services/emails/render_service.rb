# frozen_string_literal: true

module Emails
  class RenderService < BaseService
    def initialize(template:, placeholders: {})
      @template = template
      @placeholders = placeholders.transform_keys(&:to_s).freeze

      super()
    end

    def call
      result.template = template
      return result if placeholders.empty?

      placeholder_regex = /\[([^\]]+)\]/

      rendered_template = template.gsub(placeholder_regex) do |match|
        key = match[1..-2] # Extract key (strip the square brackets)
        placeholders.fetch(key, match) # Replace with value or leave placeholder as-is
      end

      result.template = rendered_template.freeze
      result
    end

    private

    attr_reader :template, :placeholders
  end
end
