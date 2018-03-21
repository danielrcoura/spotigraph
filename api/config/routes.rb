Rails.application.routes.draw do
  resources :playlists do
    resources :musics
  end

  get 'graph/playlists' => 'graph#index'
  get 'graph/playlists/:id' => 'graph#show'

end
