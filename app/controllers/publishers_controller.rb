class PublishersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    
        def index
            publishers = Publisher.all.order(:name)
            render json: publishers, status: :found
        end
    
        def create
            publisher = Publisher.create!(publisher_params)
            render json: publisher, status: :created
        end
    
        private
    
        def publisher_params
            params.permit(:name)
        end

        def not_valid(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
        end
    
end
    
