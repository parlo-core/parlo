# frozen_string_literal: true

Rails.application.routes.draw do
  get 'health_status', to: 'application#health_status'

  namespace :admin do
    resources :lists, only: %i[create update index destroy]
    resources :users, only: :create
    post '/login', to: 'auth#create'
  end
end
