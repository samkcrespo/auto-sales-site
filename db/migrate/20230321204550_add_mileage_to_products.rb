class AddMileageToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :mileage, :integer
  end
end
