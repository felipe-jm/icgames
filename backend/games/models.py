from django.db import models

from icgames.base import CommomClass


class Game(CommomClass):
    name = models.TextField(max_length=255)
    description = models.TextField(max_length=1000, null=True, blank=True)
    price = models.DecimalField(max_digits=15, decimal_places=2, default=0)
