import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from project01.models import Worry
from project01.serializers import WorrySerializer

@api_view(['GET'])
def get_user_worries(request, user_id):
    worries = Worry.objects.filter(user_id=user_id).order_by('-created_at')
    serializer = WorrySerializer(worries, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_worry(request):
    serializer = WorrySerializer(data=request.data)
    if serializer.is_valid():
        image = request.data.get('image')
        worry = serializer.save()
        if image:
            filename = str(worry.id) + os.path.splitext(image.name)[1]
            with open(os.path.join('path', filename), 'wb+') as f:
                for chunk in image.chunks():
                    f.write(chunk)
            worry.image = filename
            worry.save()
        serializer = WorrySerializer(worry)
        return Response(serializer.data, status=201)
    else:
        return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_worry(request, worry_id):
    Worry.objects.filter(id=worry_id).delete()
    return Response({'success': True})
