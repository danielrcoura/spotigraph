class Playlist < ApplicationRecord

  # model association
  has_many :musics, dependent: :destroy

  # validation
  validates_presence_of :name

  def get_qtd_musics
    return self.musics.all.length
  end
end
