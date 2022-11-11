from rest_framework import serializers
from .models import Place, Category, Facility

class FacilitySerializer(serializers.ModelSerializer):
    
    place = serializers.PrimaryKeyRelatedField(read_only=True)
    category = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Facility
        fields = '__all__'

class PlaceSerializer(serializers.ModelSerializer):
    facilitys = FacilitySerializer(many=True, read_only=True)
    
    class Meta:
        model = Place
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    facilitys = FacilitySerializer(many=True, read_only=True)
    
    class Meta:
        model = Category
        fields = '__all__'