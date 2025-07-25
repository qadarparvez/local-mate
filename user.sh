#!/bin/bash

source .env

# Create superuser via a Python shell script to set the password
python3 manage.py shell << END
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='$DEFAULT_USER').exists():
    User.objects.create_superuser(
        username='$DEFAULT_USER',
        email='$DEFAULT_EMAIL',
        password='$DEFAULT_PASSWORD'
    )
END
echo "Superuser created with username: $DEFAULT_USER"