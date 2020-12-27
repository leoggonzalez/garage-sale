Rails.application.routes.draw do
  devise_for :users
  resources :products do
    resources :images
  end
  root 'welcome#index'
  get '/items/:id', to: 'items#show', as: 'item'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
