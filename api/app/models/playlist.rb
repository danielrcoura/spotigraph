class Playlist < ApplicationRecord

  # model association
  has_many :musics, dependent: :destroy

  # validation
  validates_presence_of :name
end
