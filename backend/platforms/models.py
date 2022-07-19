from django.db import models

from icgames.base import CommomClass


class Platform(CommomClass):
    name = models.TextField(max_length=255)
