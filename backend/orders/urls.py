from rest_framework import routers
from orders import viewsets


router = routers.DefaultRouter()

router.register('orders', viewsets.OrderViewSet, basename='orders')

urlpatterns = router.urls
