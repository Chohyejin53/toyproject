# from django.urls import path
# from project01.views import get_user_worries, create_worry, delete_worry

# urlpatterns = [
#     path('user/<str:user_id>/worries/', get_user_worries),
#     path('worries/', create_worry),
#     path('worries/<int:worry_id>/', delete_worry),
# ]

from django.urls import path
from project01.views import get_user_worries, create_worry, delete_worry
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('user/<str:user_id>/worries/', get_user_worries),
    path('worries/', create_worry),
    path('worries/<int:worry_id>/', delete_worry),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

