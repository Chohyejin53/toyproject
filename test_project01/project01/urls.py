
from django.urls import path
from .views import get_user_projects, create_project, delete_project

urlpatterns = [
    path('user/<str:user_id>/projects/', get_user_projects),
    path('projects/', create_project),
    path('projects/<int:project01_id>/', delete_project),
]
