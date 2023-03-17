class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :no_route
    
        def show
            book = current_user.books.find_by(id: params[:id])
            render json: book, status: :found
        end
    
        def create
            book = current_user.books.create!(book_params)
            render json: book, status: :created
        end
    
        def update
            book = current_user.books.find_by(id: params[:id])
            book.update!(book_params)
            render json: book
        end
    
        def destroy
            book = current_user.books.find_by(id: params[:id])
            book.destroy
            head :no_content
        end
    
        private
        
        def book_params
            params.permit(:publisher_id, :name, :writer, :edition, :image_url)
        end
    
        def not_valid(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
        def no_route
            render json: {error: "Title not found"}, status: :not_found
        end
end
    
