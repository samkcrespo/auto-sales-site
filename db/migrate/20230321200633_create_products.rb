class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :make
      t.string :model
      t.decimal :price
      t.text :description
      t.text :imageurl

      t.timestamps
    end
  end
end
