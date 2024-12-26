# frozen_string_literal: true

module Passwords
  class ResetService < BaseService
    def initialize(user:, new_password:)
      @user = user
      @new_password = new_password

      super()
    end

    def call
      return result.not_found_error!(resource: 'user') unless user
      return result.validation_error!(messages: [field: :password, code: 'invalid_value']) unless new_password
      unless user&.password_reset_token_valid?
        return result.validation_error!(messages: [field: :reset_password_token, code: 'expired'])
      end

      user.password = new_password
      user.clear_password_reset_token!

      result.user = user
      result
    rescue ActiveRecord::RecordInvalid => e
      result.record_validation_error!(record: e.record)
    end

    private

    attr_reader :user, :new_password
  end
end
