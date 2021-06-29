from django.contrib import admin
from .models import Flight

class FlightsAdmin(admin.ModelAdmin):
	list_display = ('origin', 'destination', 'depart_date', 'return_date')

admin.site.register(Flight, FlightsAdmin)