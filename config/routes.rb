Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home_page#index'

  match ':controller(/:action(/:id))', :via => :get
  # get 'login#login'

  namespace :admin do
    resources :users
    root to: "users#index"
    match 'users/:id' => 'users#destroy', :via => :delete, :as => :admin_destroy_user
  end
end

