from django.db import models

from icgames.base import CommomClass

from categories.models import Category


class Game(CommomClass):
    name = models.TextField(max_length=255)
    description = models.TextField(max_length=1000, null=True, blank=True)
    price = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    category = models.ForeignKey(Category, models.PROTECT, db_column='category_id', null=True, blank=True)

    @property
    def category_name(self):
        if self.category:
            return self.category.name
        return '-'