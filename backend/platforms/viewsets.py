from rest_framework import viewsets
from rest_framework import permissions

from platforms.models import Platform

from platforms.serializers import PlatformSerializer


class PlatformViewSet(viewsets.ModelViewSet):
    queryset = Platform.objects.all().order_by('-created_at')
    serializer_class = PlatformSerializer
    permission_classes = [permissions.IsAuthenticated]
