from django.urls import path
from .views import *

urlpattern = [

    path('', RouteView.as_view(), name='routes'),
    
]