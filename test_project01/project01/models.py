from django.db import models

class Project01(models.Model):
    text = models.CharField(max_length=200)
    user_id = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
