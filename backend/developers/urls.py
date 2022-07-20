from rest_framework import routers
from developers import viewsets


router = routers.DefaultRouter()

router.register('developers', viewsets.DeveloperViewSet, basename='developers')

urlpatterns = router.urls
