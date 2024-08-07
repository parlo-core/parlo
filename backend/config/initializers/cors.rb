# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin Ajax requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    if ENV.key?('PARLO_FRONT_URL')
      uri = URI(ENV['PARLO_FRONT_URL'])

      frontend_origin = if uri.port.in?([80, 443])
                          uri.host
                        else
                          [uri.host, uri.port].join(':')
                        end

      origins frontend_origin
    elsif Rails.env.development?
      origins 'app.parlo.dev'
    end

    resource '*',
             headers: :any,
             methods: %i[get post put patch delete options head]
  end
end
