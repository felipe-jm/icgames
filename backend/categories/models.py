from django.db import models

from icgames.base import CommomClass


class Category(CommomClass):
    name = models.TextField(max_length=255)
