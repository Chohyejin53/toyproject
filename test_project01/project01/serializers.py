from rest_framework import serializers
from project01.models import Worry

class WorrySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Worry
        fields = ('id', 'text', 'user_id', 'created_at', 'image')