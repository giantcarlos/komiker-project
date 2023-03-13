class PublisherSerializer < ActiveModel::Serializer
  attributes :id, :name, :books
  has_many :books
  has_many :users, through: :books
end

