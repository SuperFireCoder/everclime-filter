class CreateImpactCards < ActiveRecord::Migration[7.1]
  def change
    create_table :impact_cards do |t|
      t.string :card_id, null: false
      t.string :brand, null: false
      t.string :location, null: false
      t.string :sponsor, null: false
      t.string :reward, null: false

      t.timestamps
    end

    add_index :impact_cards, :card_id, unique: true
  end
end 