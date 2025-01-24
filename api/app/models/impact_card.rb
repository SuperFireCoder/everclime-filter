class ImpactCard < ApplicationRecord
  validates :card_id, presence: true, uniqueness: true
  validates :brand, presence: true
  validates :location, presence: true
  validates :sponsor, presence: true
  validates :reward, presence: true
end 