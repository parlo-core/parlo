# frozen_string_literal: true

class CountryCodeValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add(attribute, :invalid_country_code) unless valid?(value)
  end

  protected

  def valid?(value)
    value && ISO3166::Country.new(value).present?
  end
end
