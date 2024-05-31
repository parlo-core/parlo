# frozen_string_literal: true

Rails.application.routes.draw do
  get 'health_status', to: 'application#health_status'
end
