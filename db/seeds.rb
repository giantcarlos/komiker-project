# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dc = Publisher.create(name: "DC")
marvel = Publisher.create(name: "Marvel")
vertigo = Publisher.create(name: "Vertigo")
image = Publisher.create(name: "Image")
topshelf = Publisher.create(name: "Top Shelf")
dq = Publisher.create(name: "Drawn & Quarterly")
titan = Publisher.create(name: "Titan Books")
graphitti = Publisher.create(name: "Graphitti Designs")

gian = User.create(username: "gian", email: "gianfakeemail@gmail.com", password: "1234")
salem = User.create(username: "salem", email: "salemfakeemail@gmail.com", password: "1234")

Book.create(publisher_id: dc.id, user_id: gian.id, name: "Superman: Red Son", writer: "Mark Millar", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/I/51Phw2M63RL._AC_SY1000_.jpg")
Book.create(publisher_id: graphitti.id, user_id: gian.id, name: "Watchmen", writer: "Alan Moore", edition: "Leatherbound", image_url: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-5561078.jpg?1525311561")
Book.create(publisher_id: graphitti.id, user_id: gian.id, name: "The Crow", writer: "James O'Barr", edition: "Leatherbound", image_url: "https://iwt.sfo2.cdn.digitaloceanspaces.com/cbr-covers/f3739a1ca0e9816f00d4efae1cf7b2b5_xl.jpg")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "X-Men: Dark Phoenix Saga", writer: "Chris Claremont", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61FgBxfWLoL._AC_UF1000,1000_QL80_.jpg")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "X-Men: Day of Future Past", writer: "Chris Claremont", edition: "Hardcover", image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1393227496i/18359970.jpg")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "X-Men: God Loves, Man Kills", writer: "Chris Claremont", edition: "Hardcover", image_url: "https://cdn.shopify.com/s/files/1/0012/3866/3275/products/x-men-comic-god-loves-man-kills-chris-claremont.jpg?v=1585888609")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "X-Men: Mutant Genesis", writer: "Chris Claremont", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/I/51vr1X7h+ML.jpg")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "Wolverine", writer: "Chris Claremont and Frank Miller", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/I/81Z-gMSUlvL._AC_UF1000,1000_QL80_.jpg")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "Wolverine: Weapon X", writer: "Barry Windsor-Smith", edition: "Hardcover", image_url: "https://cdn.marvel.com/u/prod/marvel/i/mg/2/30/58b5cfccd2eb2/clean.jpg")
Book.create(publisher_id: vertigo.id, user_id: gian.id, name: "Death", writer: "Neil Gaiman", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/P/B09TV116RT.01._SCLZZZZZZZ_SX500_.jpg")
Book.create(publisher_id: marvel.id, user_id: gian.id, name: "X-Men: House of X", writer: "Jonathan Hickman", edition: "Hardcover", image_url: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/5305368.jpg")
Book.create(publisher_id: topshelf.id, user_id: gian.id, name: "Blankets", writer: "Craig Thompson", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81ClZo93byL._AC_UF1000,1000_QL80_.jpg")
Book.create(publisher_id: dq.id, user_id: gian.id, name: "Berlin", writer: "Jason Lutes", edition: "Hardcover", image_url: "https://drawnandquarterly.com/wp-content/uploads/biblioshare_attachments/9781770463264.png")
Book.create(publisher_id: dq.id, user_id: gian.id, name: "Shortcomings", writer: "Adrian Tomine", edition: "Hardcover", image_url: "https://images.booksense.com/images/166/299/9781897299166.jpg")
Book.create(publisher_id: image.id, user_id: gian.id, name: "The Complete Phonogram", writer: "Kieron Gillen and Jamie Mckelvie", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/414YfyO2vzL._SX323_BO1,204,203,200_.jpg")



Book.create(publisher_id: dc.id, user_id: salem.id, name: "V for Vendetta", writer: "Alan Moore", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810o0N-Z2OL._AC_UF1000,1000_QL80_.jpg")
Book.create(publisher_id: topshelf.id, user_id: salem.id, name: "From Hell: Master Edition", writer: "Alan Moore", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/I/512ADylHObL.jpg")
Book.create(publisher_id: titan.id, user_id: salem.id, name: "Spawn: Creation", writer: "Todd McFarlane", edition: "Hardcover", image_url: "https://m.media-amazon.com/images/I/51ZQXM4HDFL._AC_UF1000,1000_QL80_.jpg")