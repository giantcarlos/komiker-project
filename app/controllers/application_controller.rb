class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid
  rescue_from ActiveRecord::RecordNotFound, with: :no_route

  private

  def authorize
    if !current_user 
      render json: { error: ["Please login or signup for an account."] }, status: :unauthorized
    end
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def not_valid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def no_route
    render json: {error: "Title not found"}, status: :not_found
  end

end
