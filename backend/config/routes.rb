# frozen_string_literal: true

Rails.application.routes.draw do
  get 'health_status', to: 'application#health_status'

  namespace :admin do
    resources :lists, only: %i[create update index destroy show]

    resources :contacts, only: %i[create update index destroy show]
    post '/contacts/import', to: 'contacts#import'

    resources :templates, only: %i[create update index destroy show]
    resources :campaigns, only: %i[create update index destroy show]
    resources :users, only: :create
    resources :passwords, only: [] do
      collection do
        post :forgot
        post :reset
      end
    end
    get '/users/current', to: 'users#show'

    put '/companies', to: 'companies#update'
    get '/companies/current', to: 'companies#show'

    get '/insights', to: 'insights#show'

    post '/login', to: 'auth#create'
  end
end
