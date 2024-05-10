class ApplicationController < ActionController::API
  def health_status
    begin
      ActiveRecord::Base.connection.execute('')
      render(
        json: {
          message: 'Healthy'
        },
        status: :ok,
      )
    rescue ActiveRecord::ActiveRecordError => e
      render(
        json: {
          message: 'Sick',
          details: e.message,
        },
        status: :internal_server_error,
      )
    end
  end
end
