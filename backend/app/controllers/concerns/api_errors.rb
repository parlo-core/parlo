# frozen_string_literal: true

module ApiErrors
  extend ActiveSupport::Concern

  def unauthorized_error(message: 'Unauthorized')
    render(
      json: {
        status: 401,
        error: message
      },
      status: :unauthorized
    )
  end

  def bad_request_error(error: nil)
    render(
      json: {
        status: 400,
        error: "BadRequest: #{error&.message}"
      },
      status: :bad_request
    )
  end

  def not_found_error(resource:)
    render(
      json: {
        status: 404,
        error: 'Not Found',
        code: "#{resource}_not_found"
      },
      status: :not_found
    )
  end

  def method_not_allowed_error(code:)
    render(
      json: {
        status: 405,
        error: 'Method Not Allowed',
        code:
      },
      status: :method_not_allowed
    )
  end

  def validation_errors(errors:)
    render(
      json: {
        status: 422,
        error: 'Unprocessable Entity',
        code: 'validation_errors',
        error_details: errors
      },
      status: :unprocessable_entity
    )
  end

  def render_error_response(error_result)
    case error_result.error
    when ParloNotFoundError
      not_found_error(resource: error_result.error.resource)
    when ParloNotAllowedError
      method_not_allowed_error(code: error_result.error.code)
    when ParloValidationError
      validation_errors(errors: error_result.error.messages)
    else
      raise(error_result.error)
    end
  end
end
