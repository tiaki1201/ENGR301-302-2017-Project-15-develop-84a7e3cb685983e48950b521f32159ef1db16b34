class Admin::UsersController < Admin::AdminController
  def index
      @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    User.create!(user_params)
    redirect_to(admin_root_path)
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :admin, :email)
  end

  def destroy
    @user = User.find(params[:id])
    print(@user);
    @user.destroy

    if @user.destroy
      redirect_to root_url, notice: "User deleted."
    end
  end
end