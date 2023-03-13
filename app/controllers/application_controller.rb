class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  private

  def authorize
    if !current_user 
      render json: { error: ["Please login or signup for an account."] }, status: :unauthorized
    end
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end
