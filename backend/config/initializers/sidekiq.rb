# frozen_string_literal: true

require 'sidekiq/web'

redis_config = {
  url: ENV['REDIS_URL'],
  pool_timeout: 5,
  ssl_params: {
    verify_mode: OpenSSL::SSL::VERIFY_NONE
  }
}

if ENV['REDIS_PASSWORD'].present? && !ENV['REDIS_PASSWORD'].empty?
  redis_config = redis_config.merge({password: ENV['REDIS_PASSWORD']})
end

Sidekiq::Web.use(ActionDispatch::Cookies)
Sidekiq::Web.use(ActionDispatch::Session::CookieStore, key: '_interslice_session')

# Basic authentication for Sidekiq web interface
if Rails.env.production? # Only enable auth in production
  Sidekiq::Web.use Rack::Auth::Basic, "Protected Area" do |username, password|
    username == ENV['SIDEKIQ_USER'] && password == ENV['SIDEKIQ_PASSWORD']
  end
end

Sidekiq.configure_server do |config|
  config.redis = redis_config
  config.logger = Sidekiq::Logger.new($stdout)
  config.logger.formatter = Sidekiq::Logger::Formatters::JSON.new
  config[:max_retries] = 0
  config[:dead_max_jobs] = ENV.fetch('LAGO_SIDEKIQ_MAX_DEAD_JOBS', 100_000).to_i
end

Sidekiq.configure_client do |config|
  config.redis = redis_config
  config.logger = Sidekiq::Logger.new($stdout)
  config.logger.formatter = Sidekiq::Logger::Formatters::JSON.new
end
