# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ApiErrors
  include Pagination

  wrap_parameters false

  rescue_from ActionController::RoutingError, with: :not_found
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActionController::ParameterMissing, with: :bad_request_error

  before_action :set_json_format

  def health_status
    ActiveRecord::Base.connection.execute('')
    render(
      json: {
        message: 'Operational'
      },
      status: :ok
    )
  rescue ActiveRecord::ActiveRecordError => e
    render(
      json: {
        message: 'Incident',
        details: e.message
      },
      status: :internal_server_error
    )
  end

  protected

  def set_json_format
    request.format = :json
  end

  def not_found
    not_found_error(resource: 'resource')
  end
end
