Rails.application.routes.draw do
  # Admin
  devise_for :users
  namespace :admin do
    resources :products do
      resources :images
    end
  end
  # Frontend
  resources :products, only: :show
  get '/admin', to: 'admin/products#index'
  get '/products', to: 'welcome#index'
  root 'welcome#index'
end
