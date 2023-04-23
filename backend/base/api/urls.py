from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('signup', views.CreateUserView.as_view(), name='signup'),
    
    path('podcasts', views.getPodcasts, name='podcasts')
]
