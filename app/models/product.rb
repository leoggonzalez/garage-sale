class Product < ApplicationRecord
  has_many :images, dependent: :destroy
  
  validates :name, presence: true
  validates :price, presence: true

  def main_image
    self.images[0] if self.images[0]
  end
end
