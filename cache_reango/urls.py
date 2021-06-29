from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('flights.urls')),
    path('admin/', admin.site.urls),
]
