import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_message_board.settings')
django.setup()

from faker import Faker
from message_board.models import Message
import pytz

fake = Faker('zh_CN')
Message.objects.all().delete()
for i in range(50):
    Message.objects.create(name=fake.name(), body=fake.sentence(),timestamp=fake.date_time_this_year(tzinfo=pytz.UTC))