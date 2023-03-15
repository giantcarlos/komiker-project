class Publisher < ApplicationRecord
    has_many :books
    has_many :users, through: :books

    validates :name, presence: true, uniqueness: true
end
