Rails.application.routes.draw do

  devise_for :admins
    resources :projects

    get '*path' => redirect('/')

    root 'projects#index'

end
