from rest_framework import routers
from games import viewsets


router = routers.DefaultRouter()

router.register('games', viewsets.GameViewSet, basename='games')

urlpatterns = router.urls
