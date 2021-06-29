from django.shortcuts import render
from .serializers import FlightSerializer
from flights.models import Flight
from rest_framework import viewsets

class FlightViewSet(viewsets.ModelViewSet):
	queryset = Flight.objects.all()
	serializer_class = FlightSerializer
	