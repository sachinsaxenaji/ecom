from django.contrib import admin

from .models import Product
from .models import Contact
from .models import Orders, OrderUpdate
admin.site.register(Contact)
admin.site.register(Product)
admin.site.register(Orders)
admin.site.register(OrderUpdate)

