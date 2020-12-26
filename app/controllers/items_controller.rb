class ItemsController < ApplicationController
  def show
    @products = Product.all
    
    render layout: "welcome"
  end
end
