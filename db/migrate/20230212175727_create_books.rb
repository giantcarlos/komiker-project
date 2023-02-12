class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :name
      t.string :writer
      t.string :edition
      t.string :image_url

      t.timestamps
    end
  end
end
