class Admin::AdminController < ActionController::Base
  layout 'admin'
  before_action :authenticate

  private
  def authenticate
    redirect_to root_path unless current_user&.admin?
  end
end
