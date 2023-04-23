from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .serializers import UserSerializer, PodcastSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/token/',
        'api/token/refresh/',
        
        'api/podcasts',
        'api/profile/<str:pk>/',
    ]
    return Response(routes)


# Create your views here.
class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer



#Auth Tokens
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
from base.models import Podcast

@api_view(['GET'])
def getPodcasts(request):
    podcasts = Podcast.objects.all()
    serializer = PodcastSerializer(podcasts, many=True)
    return Response(serializer.data)