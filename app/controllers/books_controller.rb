class BooksController < ApplicationController
    
    def show
        book = @current_user.books.find_by(id: params[:id])
        render json: book, status: :found
    end
    
    def create
        book = @current_user.books.create!(book_params)
        render json: book, status: :created
    end
    
    def update
        book = @current_user.books.find_by(id: params[:id])
        book.update!(book_params)
        render json: book
    end
    
    def destroy
        book = @current_user.books.find_by(id: params[:id])
        book.destroy
        head :no_content
    end
    
    private
        
    def book_params
        params.permit(:publisher_id, :name, :writer, :edition, :image_url)
    end

end
    
