# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'aws-sdk-s3'
car2 = Product.create!(title: "1991 Honda Beat", description: "Up for sale is a rare 1991 Honda Beat, imported straight from Japan!
- Right-hand drive 
- Convertible soft top
- Peppy 656cc engine. Starts right up and idles perfect
- Smooth shifting 5-speed manual transmission
- Rear-wheel drive
- Only 69,000 miles (111,160 km) on the odometer
- Working heater and AC
- Thoroughly inspected and all is mechanically sound
- Leather seats
- Very well-maintained and clean interior and exterior
- Rust free
- Clean title
Come check out this unique car and take it for a spin!
Located in Krum, Texas. (near Dallas)
",
make: "Honda", model: "Beat", price: 9000, year: 1991, mileage: 69000, imageurl: "https://tse2.mm.bing.net/th?id=OIP.4SZGlvluaNORwK3NOu20rwHaE6&pid=Api&P=0" )

testUser = User.create!(first_name: 'Testcase', last_name: 'User', username: 'testuser', email: 'test@test.com', password: 'tester', isAdmin: true)