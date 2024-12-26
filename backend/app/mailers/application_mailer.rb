# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'hello@getparlo.io'
  layout 'mailer'
end
