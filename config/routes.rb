Rails.application.routes.draw do
  root "staticpages#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
