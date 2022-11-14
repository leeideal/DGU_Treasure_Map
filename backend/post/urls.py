from django.urls import path
from .views import *
from . import views

app_name = "post"
urlpatterns = [
    path('placeget/<str:id>', views.get_place),
    path('categoryget/<str:id>', views.get_category),
]