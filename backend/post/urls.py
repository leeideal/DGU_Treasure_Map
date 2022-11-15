from django.urls import path
from .views import *
from . import views

app_name = "post"
urlpatterns = [
    path('', views.main),
    path('placeget/<str:id>', views.get_place),
    path('categoryget/<str:id>', views.get_category),
    path('facility/<str:id>', views.get_facility),
]