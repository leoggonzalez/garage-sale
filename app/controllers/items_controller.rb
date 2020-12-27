class ItemsController < ApplicationController
  before_action :set_item, only: [:show]

  def show
    render layout: "welcome"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Product.find(params[:id])
    end
end
