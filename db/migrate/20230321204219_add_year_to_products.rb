class AddYearToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :year, :integer
  end
end
