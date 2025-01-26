# frozen_string_literal: true

require 'aws-sdk-ses'

module Emails
  class SendService < BaseService
    def initialize(sender:, recipient:, subject:, body:)
      @sender = sender
      @recipient = recipient
      @subject = subject
      @body = body

      super()
    end

    def call
      client = Aws::SES::Client.new(
        region: ENV['AWS_REGION'],
        retry_limit: 2,
        retry_backoff: -> { sleep(3) }
      )

      begin
        client.send_email(
          destination: {
            to_addresses: [
              recipient
            ]
          },
          message: {
            body: {
              html: {
                charset: 'UTF-8',
                data: body
              }
            },
            subject: {
              charset: 'UTF-8',
              data: subject
            }
          },
          source: sender
        )

        logger.info("Email sent successfully to #{recipient}")
      rescue Aws::SES::Errors::ServiceError => e
        logger.error("Failed to send email to #{recipient}. Error: #{e.message}")
        raise e
      end
    end

    private

    attr_reader :sender, :recipient, :subject, :body

    def logger
      Rails.logger || Logger.new($stdout)
    end
  end
end
