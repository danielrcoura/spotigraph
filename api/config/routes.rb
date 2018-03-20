Rails.application.routes.draw do
  resources :playlists do
    resources :musics
  end
end
