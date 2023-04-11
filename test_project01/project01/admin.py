from django.contrib import admin
from django.utils.html import format_html
from project01.models import Worry

class WorryAdmin(admin.ModelAdmin):
    list_display = ('text', 'user_id', 'created_at', 'image_preview')

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50"/>'.format(obj.image.url))
        else:
            return '-'

    image_preview.short_description = 'Image Preview'

admin.site.register(Worry, WorryAdmin)
