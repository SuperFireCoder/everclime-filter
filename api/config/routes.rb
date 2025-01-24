# frozen_string_literal: true

Rails.application.routes.draw do
  scope 'api/v1' do
    root 'home#index'
  end

  namespace :api do
    namespace :v1 do
      resources :impact_cards, only: [:index]
    end
  end

  get '*path', to: 'application#react', constraints: ->(req) { !req.xhr? && req.format.html? }
end
