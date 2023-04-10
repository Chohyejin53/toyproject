
from django.urls import path
from project01.api.views import get_user_projects, create_project01, delete_project01

urlpatterns = [
    path('user/<str:user_id>/projects/', get_user_projects),
    path('projects/', create_project01),
    path('projects/<int:project01_id>/', delete_project01),
]
