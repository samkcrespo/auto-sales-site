class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :make, :model, :price, :description, :imageurl, :year, :mileage, :image_urls
end
