from django.urls import path
from . import views

urlpatterns = [
    path('', views.usersList, name='users'),
    path('detail/<str:pk>/', views.usersDetail, name='detail'),
    path('create', views.usersCreate, name='create'),
    path('update/<str:pk>/', views.usersUpdate, name='update'),
    path('delete/<str:pk>/', views.usersDelete, name='delete'),
]