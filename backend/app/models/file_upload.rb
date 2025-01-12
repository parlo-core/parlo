# frozen_string_literal: true

# TODO: Later implement cleanup job that removed unused files from S3. There can be a case where
#       template creation is terminated but file has been already uploaded.
#       Another case is that file url is just removed from template.
#       We can implement job that we will run once a week. The job can check all templates and extract from all
#       templates created in that week image urls.
#       If there is file upload in the DB but there is no image url, we can remove that file upload
#       from the database and from the aws s3
class FileUpload < ApplicationRecord
  belongs_to :company
end
