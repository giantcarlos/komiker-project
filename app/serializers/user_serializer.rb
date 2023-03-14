class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :publishers, :user_books
  has_many :books
  has_many :publishers, through: :books

  def username
    object.username.capitalize
  end

  def user_books
    object.publishers.map do |p| 
      publisher_books=p.books.select {|b| b.user_id==object.id}
      byebug
      updated_publisher=p
      updated_publisher.books=publisher_books
      updated_publisher
    end
  end

end