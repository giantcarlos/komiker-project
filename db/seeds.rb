# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dc = Publisher.create(name: "DC")
marvel = Publisher.create(name: "Marvel")

gian = User.create(username: "gian", email: "gianfakeemail@gmail.com", password: "1234")

Book.create(publisher_id: dc.id, user_id: gian.id, name: "Superman: Red Son", writer: "Mark Millar", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/I/51Phw2M63RL._AC_SY1000_.jpg")

Book.create(publisher_id: marvel.id, user_id: gian.id, name: "X-Men: God Loves, Man Kills", writer: "Chris Claremont", edition: "Hardcover", image_url: "https://cdn.shopify.com/s/files/1/0012/3866/3275/products/x-men-comic-god-loves-man-kills-chris-claremont.jpg?v=1585888609")