from django.contrib.auth.models import User
from dj_rest_auth.models import TokenModel
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = TokenModel
        fields = ['key', 'user']