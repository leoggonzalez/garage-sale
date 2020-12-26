class Image < ApplicationRecord
  validates :url, presence: true
  validates :title, presence: true
  belongs_to :product
end
