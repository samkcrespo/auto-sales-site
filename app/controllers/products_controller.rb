class ProductsController < ApplicationController

    before_action :set_product, only: [:show, :update, :destroy]

    def index
        render json: Product.all
        end

    def show
        render json: @product
    end

    def create
        product = Product.create(product_params)
        render json: product, status: :created
    end

    def update
        @product.update!(product_params)
        render json: product, status: :accepted
    end

    def destroy
        @product.destroy
        head :no_content
    end

    private 

    def product_params
        params.permit(:title, :make, :model, :price, :description, :imageurl)
    end

    def set_product
        @product = Product.find(params[:id])
    end
    
end
