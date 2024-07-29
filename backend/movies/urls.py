from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:movie_href>", views.details, name="details")
]