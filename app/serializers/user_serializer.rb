class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :books
  has_many :publishers, through: :books

  def username
    object.username.capitalize
  end

end