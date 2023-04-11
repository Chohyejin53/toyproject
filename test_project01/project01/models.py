from django.db import models

class Worry(models.Model):
    text = models.CharField(max_length=200)
    user_id = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='worry_images/', null=True, blank=True)

    def __str__(self):
        return self.text
