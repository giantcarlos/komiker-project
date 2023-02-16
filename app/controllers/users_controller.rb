class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    rescue_from ActiveRecord::RecordNotFound, with: :no_route
    
        def show
            user = User.find_by(id: session[:user_id])
            render json: user, status: :found
        end
    
        def create
            user = User.create!( user_params )
            session[:user_id] = user.id
            render json: user, status: :created
        end 
    
        private
    
        def user_params
            params.permit(:username, :password)
        end
    
        def not_valid(invalid)
            render json: { error: invalid.record.errors.full_messages }, status: 422
        end
    
        def no_route
            render json: {error: "User not found"}, status: :not_found
        end
    
end
