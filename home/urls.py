from .import views
from django.urls import path, include

urlpatterns = [
   # path("", views.register, name="register")
   path("register/", views.register, name="register"),
   path("signin/", views.login, name="login"),
   path("logout/", views.logout, name="logout")
]
