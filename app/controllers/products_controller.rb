class ProductsController < ApplicationController
  before_action :set_product, only: [:show]

  def show
    render layout: "welcome"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end
end
