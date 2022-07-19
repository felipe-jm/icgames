from django.db import models


class IdBigInt(models.Model):
    id = models.BigAutoField(primary_key=True)

    class Meta:
        abstract = True


class CommomClass(IdBigInt, models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name='updated', auto_now=True)
    is_active = models.BooleanField(verbose_name='active', default=True)

    class Meta:
        abstract = True
