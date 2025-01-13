# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Admin::UploadsController, type: :request do
  let(:company) { create(:company) }
  let(:user) { create(:user, company:) }
  let(:token) { Auth::TokenService.new(user:).encode_token.token }

  before do
    user
    token
  end

  describe 'create' do
    let(:s3_object) { instance_double(Aws::S3::Resource) }
    let(:bucket) { instance_double(Aws::S3::Bucket) }
    let(:object) { instance_double(Aws::S3::Object) }
    let(:params) do
      {
        filename: 'test1',
        file_type: 'image/jpeg',
        file_size: 10_000
      }
    end

    before do
      allow(Aws::S3::Resource).to receive(:new).and_return(s3_object)
      allow(s3_object).to receive(:bucket).and_return(bucket)
      allow(bucket).to receive(:object).and_return(object)
      allow(object).to receive(:presigned_url).and_return('https://presigned-for-aws-s2.com')
      allow(object).to receive(:public_url).and_return('https://public-for-aws-s2.com')
    end

    it 'returns url' do
      post_with_token(token, '/admin/uploads/presigned_url', params)

      aggregate_failures do
        expect(response).to have_http_status(:success)
        expect(json[:url]).to eq('https://presigned-for-aws-s2.com')
        expect(json[:file_url]).to eq('https://public-for-aws-s2.com')
      end
    end

    context 'when type is invalid' do
      let(:params) do
        {
          filename: 'test1',
          file_type: 'image/ttttttttttt',
          file_size: 10_000
        }
      end

      it 'returns not allowed error' do
        post_with_token(token, '/admin/uploads/presigned_url', params)

        expect(response).to have_http_status(:method_not_allowed)
      end
    end

    context 'when size is invalid' do
      let(:params) do
        {
          filename: 'test1',
          file_type: 'image/png',
          file_size: 1_000_000_000_000
        }
      end

      it 'returns not allowed error' do
        post_with_token(token, '/admin/uploads/presigned_url', params)

        expect(response).to have_http_status(:method_not_allowed)
      end
    end
  end
end
