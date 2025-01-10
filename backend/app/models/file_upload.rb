# frozen_string_literal: true

# TODO: Later implement cleanup job that removed unused files from S3. There can be a case where
#       template creation is terminated but file has been already uploaded
class FileUpload < ApplicationRecord
  belongs_to :company
end
