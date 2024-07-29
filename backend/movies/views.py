from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from utils import get_db_handle
from bson.objectid import ObjectId
from bson.json_util import dumps
import json

# Create your views here.
def index(request):
  db, client = get_db_handle()
  collection = db['movies']
  page = int(request.GET.get('page', 1))
  movies = collection.find().skip(10 * (page - 1)).limit(10)
  response = json.loads(dumps(list(movies)))
  return JsonResponse(response, safe=False)

def details(request, movie_href):
  db, client = get_db_handle()
  collection = db['movies']
  movie = collection.find_one({'href': movie_href})
  response = json.loads(dumps(movie))
  return JsonResponse(response, safe=False)