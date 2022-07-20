from django.db import models

from icgames.base import CommomClass


class Developer(CommomClass):
    name = models.TextField(max_length=255)
