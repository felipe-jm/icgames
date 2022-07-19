from django.db import models
from django.contrib.auth.models import User

from icgames.base import CommomClass


class Order(CommomClass):
    user = models.ForeignKey(User, models.PROTECT, db_column='user_id')
