class UsersController < ApplicationController
    
    def index
        render json: User.all
    end

    def create
        user = User.create(user_params)
        if user.valid?
         session[:user_id] = user.id
        render json: user, status: :created
       else
        render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        
       end
    end

    def update
        user = user.find(params[:id])
        user.update!(user_params)
        render json: user
    end

    def show 
        userevents = user.find_by(id: session[:user_id])
        # userevents = user.find(params[:id])
        render json: userevents, serializer: userWithEventsSerializer
    end

    private 
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :username, :password_confirmation)
    end
end
