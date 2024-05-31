# frozen_string_literal: true

module ApiHelper
  def json
    return response.body unless response.media_type.include?('json')

    JSON.parse(response.body, symbolize_names: true)
  end
end
