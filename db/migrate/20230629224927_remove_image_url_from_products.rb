class RemoveImageUrlFromProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :imageurl, :string
  end
end
