# frozen_string_literal: true

module Auth
  class TokenService < BaseService
    def initialize(user: nil)
      @user = user

      super()
    end

    # GET TOKEN
    def encode_token
      result.token = JWT.encode(payload, ENV['SECRET_KEY_BASE'], 'HS256')
      result
    end

    # VALIDATE TOKEN
    def active_user(token)
      @token = token

      result.active_user = current_user
      result
    end

    private

    attr_reader :user, :token

    def payload
      {
        sub: user.id,
        exp: Time.now.to_i + 7200 # 2 hours expiration
      }
    end

    def current_user
      return @current_usser if defined? @current_user

      @current_user = if !token
                        nil
                      elsif !decoded_token
                        nil
                      elsif !valid_token?
                        nil
                      else
                        User.find_by(id: payload_content['sub'])
                      end
    end

    def decoded_token
      @decoded_token ||= JWT.decode(token, ENV['SECRET_KEY_BASE'], true, algorithm: 'HS256')
    rescue JWT::DecodeError => e
      raise e if e.is_a?(JWT::ExpiredSignature) || Rails.env.development?
    end

    def valid_token?
      Time.now.to_i <= payload_content['exp']
    end

    def payload_content
      @payload_content ||= decoded_token.reduce({}, :merge)
    end
  end
end
