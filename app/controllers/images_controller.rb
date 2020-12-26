class ImagesController < ApplicationController
  before_action :set_product, only: [:create, :destroy]

  def create
    @image = @product.images.create(images_params)
    redirect_to product_path(@product)
  end

  def destroy
    @image = @product.images.find(params[:id])
    @image.destroy
    respond_to do |format|
      format.html { redirect_to product_path(@product), notice: 'Image was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:product_id])
    end

    # Only allow a list of trusted parameters through.
    def images_params
      params.require(:image).permit(:url, :title, :description)
    end
end
