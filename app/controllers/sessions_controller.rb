class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:current_user] = user.id
          render json: user, status: :ok
        else
                render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
      end
    
      def destroy 
        session.delete :user_id
        session.delete :current_user
        head :no_content
      end
      
end