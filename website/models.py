from django.db import models

# Create your models here.

class form(models.Model):
    CONTACT_REASON_CHOICES = [
        ('partnership', 'Partnership Inquiry'),
        ('guide-registration', 'Guide Registration'),
        ('general-question', 'General Question'),
        ('feedback', 'Feedback'),
        ('other', 'Other'),
    ]
    name = models.CharField(max_length=25)
    email = models.CharField(max_length=30)
    phone = models.BigIntegerField()
    contactReason = models.CharField(max_length=30, choices=CONTACT_REASON_CHOICES)
    message = models.CharField(max_length=500)

