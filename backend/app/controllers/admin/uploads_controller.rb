# frozen_string_literal: true

module Admin
  class UploadsController < BaseController
    ALLOWED_FILE_TYPES = %w[image/jpeg image/png image/gif].freeze
    MAX_FILE_SIZE = 5.megabytes
    MAX_NUMBER_OF_UPLOADS = 50

    def presigned_url
      filename = params[:filename]
      file_type = params[:file_type]
      file_size = params[:file_size].to_i

      return method_not_allowed_error(code: 'invalid_extension') unless ALLOWED_FILE_TYPES.include?(file_type)
      return method_not_allowed_error(code: 'invalid_file_size') if file_size > MAX_FILE_SIZE

      if current_company.file_uploads.where('created_at > ?', Time.current - 1.month).count >= MAX_NUMBER_OF_UPLOADS
        return method_not_allowed_error(code: 'max_number_of_uploads_reached')
      end

      s3 = Aws::S3::Resource.new(region: ENV['AWS_REGION'])
      bucket = s3.bucket(ENV['AWS_BUCKET_NAME'])
      object = bucket.object("uploads/#{SecureRandom.uuid}-#{filename}")
      url = object.presigned_url(:put, expires_in: 900, content_type: file_type)

      render json: { url:, file_url: object.public_url }, status: :ok
    end
  end
end
