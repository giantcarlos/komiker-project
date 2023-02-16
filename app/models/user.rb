class User < ApplicationRecord
    has_many :books
    has_many :publishers, through: :books

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true
end
