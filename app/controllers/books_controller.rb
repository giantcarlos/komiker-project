class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :no_route
    
        def index
            render json: Book.all, status: :ok
        end
    
        def show
            book = Book.find_by(id: params[:id])
            render json: book, status: :found
        end
    
        def create
            book = Book.create( book_params )
            render json: book, status: :created
        end
    
        def update
            book = Book.find_by(id: params[:id])
            book.update(book_params)
            render json: book
        end
    
        def destroy
            book = Book.find_by(id: params[:id])
            book.destroy
            head :no_content
        end
    
        private
    
        def book_params
            params.permit(:user_id, publisher_id, :name, :writer, :edition, :image_url)
        end
    
        def not_valid(invalid)
            render json: { error: invalid.record.errors.full_messages }, status: unprocessable_entity
        end
    
        def no_route
            render json: {error: "Title not found"}, status: :not_found
        end
    
end
    
