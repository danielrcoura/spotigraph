class PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :update, :destroy]

  # GET /playlists
  def index
    json_response(get_playlists)
  end

  # POST /playlists
  def create
    @playlists = Playlist.create!(playlist_params)
    json_response(@playlists, :created)
  end

  # GET /playlists/:id
  def show
    json_response(show_playlist)
  end

  # PUT /playlists/:id
  def update
    @playlist.update(playlist_params)
    head :no_content
  end

  # DELETE /playlists/:id
  def destroy
    @playlist.destroy
    head :no_content
  end

  private

  def playlist_params
    # whitelist params
    params.permit(:name)
  end

  def set_playlist
    @playlist = Playlist.find(params[:id])
  end

  def show_playlist
    return {"id": @playlist[:id], "name": @playlist[:name], qtd_musics: @playlist.get_qtd_musics}
  end

  def get_playlists
    @playlists_obj = Playlist.all
    playlists = []
    @playlists_obj.each do |pl|
      playlists.push({"id": pl[:id], "name": pl[:name], qtd_musics: pl.get_qtd_musics})
    end
    return playlists
  end
end
