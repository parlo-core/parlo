# frozen_string_literal: true

class SendEmailJob < ApplicationJob
  retry_on Aws::SES::Errors::ServiceError, wait: :polynomially_longer, attempts: 3

  def perform(sender:, recipient:, subject:, body:)
    Emails::SendService.new(
      sender:,
      recipient:,
      subject:,
      body:
    ).call
  end
end
