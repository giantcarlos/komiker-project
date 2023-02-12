class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :writer, :edition
  has_one :image_urluser
  has_one :publisher
end
