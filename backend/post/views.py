from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import *
from .serializers import FacilitySerializer,PlaceSerializer,CategorySerializer

import base64
# Create your views here.
@api_view(['GET'])
def main(request):
    facilities = Facility.objects.all()
    categories = Category.objects.all()
    places = Place.objects.all()
    send_category = []
    send_place = []
    send_facility = []
    for c in categories:
        send_category.append({c.name:c.id})
    for p in places:
        send_place.append({p.name:p.id})
    for i in facilities:
        image_data = base64.b64encode(i.picture.read()).decode('utf-8')

        facility_set = {
            "name":i.name,
            "category":i.category.name,
            "id":i.id,
            "time":f"{i.time_start} ~ {i.time_end}",
            "img":image_data,
            "phone":i.phone,
            "use":i.content,
            "where":i.place.name,
            "floor":i.floor,
        }
        send_facility.append(facility_set)

    final_json = {
        "places":send_place,
        "categories":send_category, 
        "facilities":send_facility
        }
    return Response(data=final_json)

@api_view(['GET'])
def get_place(request, id):
    place_id = Place.objects.get(id=id)
    facilities = Facility.objects.filter(place=place_id)

    send_category = []
    send_facility = []
    
    for i in facilities:
        place_name = place_id.name
        category_name = i.category.name

        if {category_name:i.category.id} not in send_category:
            send_category.append({category_name:i.category.id})

        image_data = base64.b64encode(i.picture.read()).decode('utf-8')

        facility_set = {
            "name":i.name,
            "category":category_name,
            "id":i.id,
            "time":f"{i.time_start} ~ {i.time_end}",
            "img":image_data,
            "phone":i.phone,
            "use":i.content,
            "where":place_name,
            "floor":i.floor,
        }
        send_facility.append(facility_set)

    final_json = {
        "categories":send_category, 
        "facilities":send_facility
        }
    return Response(data=final_json)

@api_view(['GET'])
def get_category(request, id):
    category_id = Category.objects.get(id=id)
    facilities = Facility.objects.filter(category=category_id)

    send_place = []
    send_facility = []
    
    for i in facilities:
        place_name = i.place.name
        category_name = i.category.name

        if {place_name: i.place.id} not in send_place:
            send_place.append({place_name: i.place.id})

        image_data = base64.b64encode(i.picture.read()).decode('utf-8')

        facility_set = {
            "name":i.name,
            "category":category_name,
            "id":i.id,
            "time":f"{i.time_start} ~ {i.time_end}",
            'img':image_data,
            "phone":i.phone,
            "use":i.content,
            "where":place_name,
            "floor":i.floor,
        }
        send_facility.append(facility_set)

    final_json = {
        "places":send_place, 
        "facilities":send_facility
        }
    return Response(data=final_json)


@api_view(['GET'])
def get_facility(request, id):
    facility = Facility.objects.get(id=id)
    image_data = base64.b64encode(facility.picture.read()).decode('utf-8')
    facility_json = {
        'name':facility.name,
        'category':facility.category.name,
        'id':facility.id,
        'time':f"{facility.time_start} ~ {facility.time_end}",
        'img':image_data,
        'phone':facility.phone,
        'use':facility.content,
        'place':facility.place.name,
        'floor':facility.floor
    }
    return Response(data=facility_json)
