from rest_framework import viewsets
from rest_framework import permissions

from games.models import Game

from games.serializers import GameSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all().order_by('-created_at')
    serializer_class = GameSerializer
    permission_classes = [permissions.IsAuthenticated]
