from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    _id = models.AutoField(primary_key= True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=200)
    # slug = models.SlugField(unique=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    # image = models.ImageField(upload_to="products")
    stock_count = models.PositiveIntegerField(null=True, blank=True, default=0)
    selling_price = models.PositiveIntegerField()
    description = models.TextField()
    rating = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    view_count = models.PositiveIntegerField(default=0)
    # warranty = models.CharField(max_length=300, null=True, blank=True)
    # return_policy = models.CharField(max_length=300, null=True, blank=True)
    # pro_type = models.CharField(
    #     max_length=20, choices=TYPE, default="None", null=True, blank=True)

    def __str__(self):
        return self.title
