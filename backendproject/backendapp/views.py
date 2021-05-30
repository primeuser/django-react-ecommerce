from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import * 
# Create your views here.


class RouteView(TemplateView):
    return JsonResponse('Hello', safe=False)


