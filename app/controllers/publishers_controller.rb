class PublishersController < ApplicationController
    
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
    
end
    
