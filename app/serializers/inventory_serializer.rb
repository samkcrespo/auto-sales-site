class InventorySerializer < ActiveModel::Serializer
  attributes :id, :title, :make, :model, :price, :description, :imageurl
end
