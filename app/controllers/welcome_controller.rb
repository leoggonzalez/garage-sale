class WelcomeController < ApplicationController
  def index
    @products = Product.all
    
    render layout: "welcome"
  end
end
