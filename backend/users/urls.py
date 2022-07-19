from rest_framework import routers
from users import viewsets


router = routers.DefaultRouter()

router.register('users', viewsets.UserViewSet, basename='users')

urlpatterns = router.urls
