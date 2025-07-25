from django.urls import path , include
from . import views

urlpatterns = [
    path('', views.signup, name="signup"),
    path('login/', views.login_view, name="login"),
    path('logout/', views.logout_view, name='logout'),
    path('dashboard', views.dashboard, name="dashboard"),
] 