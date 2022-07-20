from rest_framework import viewsets
from rest_framework import permissions

from developers.models import Developer

from developers.serializers import DeveloperSerializer


class DeveloperViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all().order_by('-created_at')
    serializer_class = DeveloperSerializer
    permission_classes = [permissions.IsAuthenticated]
