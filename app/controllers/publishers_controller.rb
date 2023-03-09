class PublishersController < ApplicationController
    
        def index
            publishers = current_user.publishers.order(:name).uniq
            render json: publishers, status: :found
        end
        
        def show
            publisher = current_user.publishers.find_by(id: params[:id])
            if publisher
                render json: publisher, status: :found
            else
                render json: { error: "Publisher not found" }, status: :not_found
            end
        end
    
        def create
            publisher = current_user.publishers.create(publisher_params)
            if publisher.valid?
                render json: publisher, status: :created
            else
                render json: { errors: publisher.errors.full_messages }, status: unprocessable_entity
            end
        end
    
        private

        def current_user
            User.find_by(id: session[:user_id])
        end
    
        def publisher_params
            params.permit(:name)
        end
    
end
    
