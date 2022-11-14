from django.db import models

# Create your models here.
class Place(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Facility(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    time_start = models.TimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    time_end = models.TimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    phone = models.TextField(max_length=14, null=True, blank=True)
    content = models.TextField(max_length=400)
    place = models.ForeignKey(Place, related_name="place", on_delete=models.CASCADE)
    category = models.ForeignKey(Category, related_name="category", on_delete=models.CASCADE)
    picture = models.ImageField(upload_to = "blog/", blank=True, null=True)
    floor = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name