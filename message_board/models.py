from django.db import models
from django.utils import timezone


class Message(models.Model):
    name = models.CharField(max_length=20)
    body = models.CharField(max_length=200)
    timestamp = models.DateTimeField(default=timezone.now, db_index=True)

