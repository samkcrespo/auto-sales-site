Rails.application.routes.draw do
  
  resources :users
  resources :products
  resources :contacts, only: [:create]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path",
  to: "fallback#index",
  constraints: ->(req) { !req.xhr? && req.format.html? && 
  req.path.exclude?('rails/active_storage')}
end
