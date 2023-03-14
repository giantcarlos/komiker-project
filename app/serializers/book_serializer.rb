class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :writer, :edition, :image_url, :publisher_id, :publisher
end
