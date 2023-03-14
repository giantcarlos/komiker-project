class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :publishers_userbooks
  has_many :books

  def username
    object.username.capitalize
  end

  def publishers_userbooks
    adjusted_publishers = object.publishers.map do |p| 
      np = {}
      np[:name] = p.name
      np[:id] = p.id
      np[:books] = p.books.select {|b| b.user_id==object.id}
      np
    end
    adjusted_publishers
  end

end