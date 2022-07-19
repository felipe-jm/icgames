from users.viewsets import UserViewSet
from rest_framework import routers
from django.urls import include, path
from django.contrib import admin
from django.urls import path

from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),

    # https://krakensystems.co/blog/2020/custom-users-using-django-rest-framework
    path('rest-auth/', include('dj_rest_auth.urls')),
    path('rest-auth/registration/', include('dj_rest_auth.registration.urls')),

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),

    path('api/v1/', include('games.urls')),
    path('api/v1/', include('users.urls')),
    path('api/v1/', include('platforms.urls')),
    path('api/v1/', include('categories.urls')),
    path('api/v1/', include('orders.urls')),
]
