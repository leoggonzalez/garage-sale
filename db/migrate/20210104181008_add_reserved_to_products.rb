class AddReservedToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :reserved, :boolean
  end
end
