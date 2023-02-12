class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :writer, :edition, :image_url
  has_one :user
  has_one :publisher
end
