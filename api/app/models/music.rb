class Music < ApplicationRecord
  belongs_to :playlist

  # validation
  validates_presence_of :name
end
