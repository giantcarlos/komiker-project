class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :writer, :edition, :image_url
end
