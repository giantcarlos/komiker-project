class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :writer, :edition, :image_url, :publisher
  belongs_to :user
  belongs_to :publisher
end
