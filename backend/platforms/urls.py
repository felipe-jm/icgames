from rest_framework import routers
from platforms import viewsets


router = routers.DefaultRouter()

router.register('platforms', viewsets.PlatformViewSet, basename='platforms')

urlpatterns = router.urls
