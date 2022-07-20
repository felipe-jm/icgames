from django.db import models

from icgames.base import CommomClass

from categories.models import Category
from developers.models import Developer
from platforms.models import Platform


class Game(CommomClass):
    name = models.TextField(max_length=255)
    description = models.TextField(max_length=1000, null=True, blank=True)
    price = models.DecimalField(max_digits=15, decimal_places=2, default=0)

    category = models.ForeignKey(
        Category, models.PROTECT, db_column='category_id', null=True, blank=True)
    developer = models.ForeignKey(
        Developer, models.PROTECT, db_column='developer_id', null=True, blank=True)

    platforms = models.ManyToManyField(Platform)

    @property
    def category_name(self):
        if self.category:
            return self.category.name
        return '-'

    @property
    def developer_name(self):
        if self.developer:
            return self.developer.name
        return '-'

    @property
    def platforms_names(self):
        platforms = self.platforms.all()
        if len(platforms) == 0:
            return '-'
        names = [platform.name for platform in platforms]
        return ', '.join(names)
