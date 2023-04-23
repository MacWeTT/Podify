from django.contrib import admin
from .models import Profile, Podcast
# Register your models here.

@admin.register(Podcast)
class PodcastAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')