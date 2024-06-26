# frozen_string_literal: true

module Users
  class RegisterService < BaseService
    def initialize(params:)
      @params = params

      super
    end

    def create_user_and_company
      return result.validation_error!(messages: [field: :email, code: 'already_exists']) if User.exists?(params[:email])

      ActiveRecord::Base.transaction do
        company = Company.create!(name: params[:name])
        user = User.create!(email: params[:email], password: params[:password], company:)

        result.user = user
        result.company = company
      rescue ActiveRecord::RecordInvalid => e
        result.validation_error!(messages: e&.record&.errors&.messages&.to_a)
      end

      result
    end

    private

    attr_reader :params
  end
end
