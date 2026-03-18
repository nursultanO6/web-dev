from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'


class Product(models.Model):

    image = models.URLField(blank=True, default='')
    images = models.JSONField(default=list, blank=True)
    link = models.URLField(blank=True, default='')
    rating = models.FloatField(default=5.0)
    
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    image = models.URLField(blank=True, default='')
    images = models.JSONField(default=list, blank=True)
    link = models.URLField(blank=True, default='')
    rating = models.FloatField(default=5.0)

    def __str__(self):
        return self.name
