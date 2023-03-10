class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :writer, :edition, :image_url
  belongs_to :user
  belongs_to :publisher
end
