class PublishersController < ApplicationController
    
        def index
            publishers = Publisher.all.order(:name)
            render json: publishers, status: :found
        end
    
        def create
            publisher = Publisher.create(publisher_params)
            if publisher.valid?
                render json: publisher, status: :created
            else
                render json: { errors: publisher.errors.full_messages }, status: unprocessable_entity
            end
        end
    
        private
    
        def publisher_params
            params.permit(:name)
        end
    
end
    
