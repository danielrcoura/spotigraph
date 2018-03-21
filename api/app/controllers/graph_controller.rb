require 'set'

class GraphController < ApplicationController
  def index
    json_response(make_graph)
  end

  def show
    json_response(find_adjacent)
  end

  private

  def contains_music(p1 , p2)
    p2.musics.all.each do |music|
      p1.musics.all.each do |m|
        if music == m
          return true
        end
      end
    end
    return false
  end

  def find_adjacent
    @playlists = Playlist.all
    @playlist = Playlist.find(params[:id])

    adjacents = {"node" => params[:id], "adjacents" => []}
    @playlists.each do |pl|
      if @playlist.id != pl.id
        if contains_music(@playlist, pl)
        adjacents["adjacents"].push(pl.id)
        end
      end
    end

    return adjacents
  end

  def make_graph
    @playlists = Playlist.all
    graph = Hash.new
    @playlists.each do |playlist|
      graph[playlist.id] = []
    end
    @playlists.each do |pl_man|
      @playlists.each do |pl|
        if pl_man.id != pl.id
          if contains_music(pl_man, pl)
            graph[pl_man.id].push(pl.id)
          end
        end
      end
    end
    return graph
  end

end
