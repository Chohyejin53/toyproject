from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import Project01
from .models import Project01

@api_view(['GET'])
def get_user_projects(request, user_id):
    projects = Project01.objects.filter(user_id=user_id).order_by('-created_at')
    data = [{'id': w.id, 'text': w.text, 'created_at': w.created_at} for w in projects]
    return Response(data)

@api_view(['POST'])
def create_project(request):
    text = request.data.get('text')
    user_id = request.data.get('user_id')
    project01 = Project01.objects.create(text=text, user_id=user_id)
    return Response({'id': project01.id})

@api_view(['DELETE'])
def delete_project(request, project01_id):
    Project01.objects.filter(id=project01_id).delete()
    return Response({'success': True})
