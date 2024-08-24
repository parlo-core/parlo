# frozen_string_literal: true

module Admin
  class BaseController < ApplicationController
    before_action :authenticate

    private

    attr_reader :active_user, :current_company

    def authenticate
      result = Auth::TokenService.new.active_user(request.headers['Authorization']&.to_s&.split(' ')&.last)

      @active_user = result.active_user

      return unauthorized_error if active_user.blank?

      @current_company = active_user.company

      renew_token

      true
    rescue JWT::ExpiredSignature
      unauthorized_error
    end

    def renew_token
      return unless active_user

      token = Auth::TokenService.new(user: active_user).encode_token.token

      response.set_header('x-admin-token', token) if token
    end
  end
end
