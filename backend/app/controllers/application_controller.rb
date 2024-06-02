# frozen_string_literal: true

class ApplicationController < ActionController::API
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
end
