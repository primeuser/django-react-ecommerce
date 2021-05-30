from django.urls import path
from .views import *
app_name = "backendapp"

urlpatterns = [

    path('', getRoutes, name='routes'),
    path('products/',getProducts, name='products'),
    path('products/<str:pk>/', getProduct, name='product'),

]