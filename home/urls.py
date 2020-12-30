from .import views
from django.urls import path, include, re_path
from .views import *

app_name = 'home'

urlpatterns = [
   
   # re_path(r'^validate_phone/', ValidatePhoneSendOTP.as_view()),
   # re_path("^validate_otp/$", ValidateOTP.as_view()),
   # re_path("^register_user/$", Register.as_view()),
   # re_path("^login/$", LoginAPI.as_view()),
   path("", views.register, name="register"),
   path("register/", views.register, name="register"),
   path("signin/", views.login, name="login"),
   path("logout/", views.logout, name="logout")
]
