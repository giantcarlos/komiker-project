class PublishersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :no_route
    
        def index
            render json: Publisher.all, status: :ok
        end
        
        def show
            publisher = Publisher.find_by(id: params[:id])
            render json: publisher, status: :found
        end
    
        def create
            publisher = Publisher.create!( publisher_params )
            render json: publisher, status: :created
        end
    
        private
    
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
    
