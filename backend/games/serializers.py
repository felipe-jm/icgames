from rest_framework import serializers

# from platforms.serializers import PlatformSerializer

from games.models import Game
from platforms.models import Platform


class GameSerializer(serializers.ModelSerializer):
    platforms = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Platform.objects.all()
    )

    class Meta:
        model = Game
        fields = [
            'id',
            'name',
            'description',
            'price',
            'created_at',
            'updated_at',
            'is_active',
            'category',
            'category_name',
            'developer',
            'developer_name',
            'platforms',
            'platforms_names',
        ]
