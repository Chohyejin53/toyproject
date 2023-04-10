from rest_framework import serializers
from .models import Project01

class Project01Serializer(serializers.ModelSerializer):
    class Meta:
        model = Project01
        fields = ('text', 'user_id', 'created_at')