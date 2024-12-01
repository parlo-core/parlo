# frozen_string_literal: true

module ApiHelper
  def get_with_token(token, path, params = {}, headers = {})
    processes_headers = configure_headers(token, headers)

    get(path, params:, headers: processes_headers)
  end

  def post_with_token(token, path, params = {}, headers = {})
    processes_headers = configure_headers(token, headers)

    if params[:file].is_a?(Rack::Test::UploadedFile)
      post(path, params:, headers: processes_headers)
    else
      post(path, params: params.to_json, headers: processes_headers)
    end
  end

  def put_with_token(token, path, params = {}, headers = {})
    processes_headers = configure_headers(token, headers)

    put(path, params: params.to_json, headers: processes_headers)
  end

  def delete_with_token(token, path, params = {}, headers = {})
    processes_headers = configure_headers(token, headers)

    delete(path, params: params.to_json, headers: processes_headers)
  end

  def json
    return response.body unless response.media_type.include?('json')

    JSON.parse(response.body, symbolize_names: true)
  end

  private

  def configure_headers(token, headers)
    new_headers = {
      'Content-Type' => 'application/json',
      'Accept' => 'application/json'
    }

    new_headers['Authorization'] = "Bearer #{token}" if token

    headers.merge(new_headers)
  end
end
