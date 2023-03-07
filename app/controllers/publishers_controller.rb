class PublishersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :no_route
    
        def index
            publishers = current_user.publishers.order(:name)
            render json: publishers, include: :books, status: :found
        end
        
        def show
            publisher = current_user.publishers.find_by(id: params[:id])
            render json: publisher, include: :books, status: :found
        end
    
        def create
            publisher = current_user.publishers.create(publisher_params)
            render json: publisher, status: :created
        end
    
        private

        def current_user
            User.find_by(id: session[:user_id])
        end
    
        def publisher_params
            params.permit(:name)
        end
    
        def not_valid(invalid)
            render json: { error: invalid.record.errors.full_messages }, status: unprocessable_entity
        end
    
        def no_route
            render json: {error: "Title not found"}, status: :not_found
        end
    
end
    
