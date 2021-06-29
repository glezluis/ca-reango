from django.db import models

class Flight(models.Model):
	origin = models.CharField(max_length=255)
	destination = models.CharField(max_length=255)
	depart_date = models.DateField()
	return_date = models.DateField(null=True, blank=True)

	