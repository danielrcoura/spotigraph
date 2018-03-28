class Music < ApplicationRecord
  belongs_to :playlist

  # validation
  validates_presence_of :name

  def ==(other)
    return self.name == other.name
  end
end
