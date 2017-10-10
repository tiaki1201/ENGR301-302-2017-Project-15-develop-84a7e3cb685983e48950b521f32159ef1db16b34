# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(first_name: 'Adam', last_name: 'Wareing', password:'123456', password_confirmation: '123456', email: 'adam@kernl.co.nz', admin: true)
User.create!(first_name: 'Bob', last_name: 'Miller', password:'123456', password_confirmation: '123456', email: 'adamwareing241@gmail.com', admin: false)