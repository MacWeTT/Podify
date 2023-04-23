from rest_framework import serializers
from django.contrib.auth.models import User
from base.models import Podcast

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields= ['email', 'username', 'password']
        
    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    


class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = '__all__'