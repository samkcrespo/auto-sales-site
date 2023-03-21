class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.string :title
      t.string :make
      t.string :model
      t.string :price
      t.string :description
      t.string :imageurl

      t.timestamps
    end
  end
end
