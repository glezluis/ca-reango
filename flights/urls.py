from django.urls import path
from rest_framework import routers
from .views import FlightViewSet

router = routers.DefaultRouter()
router.register('flights', FlightViewSet, 'flight')
urlpatterns = router.urls

