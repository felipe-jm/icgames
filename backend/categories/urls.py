from rest_framework import routers
from categories import viewsets


router = routers.DefaultRouter()

router.register('categories', viewsets.CategoryViewSet, basename='categories')

urlpatterns = router.urls
