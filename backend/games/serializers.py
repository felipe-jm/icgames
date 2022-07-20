from rest_framework import serializers

from games.models import Game


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = [
            'id',
            'name',
            'description',
            'price',
            'category',
            'category_name',
            'created_at',
            'updated_at',
            'is_active'
        ]
