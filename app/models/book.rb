class Book < ApplicationRecord
  belongs_to :user
  belongs_to :publisher

  validates :name, presence: true
  validates :writer, presence: true
  validates :edition, presence: true
  validates :image_url, presence: true
end
