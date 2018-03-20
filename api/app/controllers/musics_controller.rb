class MusicsController < ApplicationController
  before_action :set_playlist
  before_action :set_playlist_music, only: [:show, :update, :destroy]

  # GET /playlists/:playlist_id/music
  def index
    json_response(@playlist.musics)
  end

  # GET /playlists/:playlist_id/musics/:id
  def show
    json_response(@music)
  end

  # POST /playlists/:playlist_id/musics
  def create
    @playlist.musics.create!(music_params)
    json_response(@playlist, :created)
  end

  # PUT /playlists/:playlist_id/musics/:id
  def update
    @music.update(music_params)
    head :no_content
  end

  # DELETE /playlists/:playlist_id/musics/:id
  def destroy
    @music.destroy
    head :no_content
  end

  private

  def music_params
    params.permit(:name, :done)
  end

  def set_playlist
    @playlist = Playlist.find(params[:playlist_id])
  end

  def set_playlist_music
    @music = @playlist.musics.find_by!(id: params[:id]) if @playlist
  end
end
