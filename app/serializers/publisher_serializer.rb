class PublisherSerializer < ActiveModel::Serializer
  attributes :id, :name, :books
  has_many :books
end
