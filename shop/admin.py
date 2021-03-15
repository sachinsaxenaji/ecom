from django.contrib import admin
from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from import_export import resources

from .models import Product
from .models import Contact
from .models import Orders, OrderUpdate, Design
# admin.site.register(Contact)


@admin.register(Product, Contact, Orders, OrderUpdate, Design)
class MemberAdmin(ImportExportModelAdmin):
    pass
class MyForm(Product):
    MY_CHOICES = [('green', 'green'), ('red', 'red')]
    def __init__(self, *args, **kwargs):
       super(MyForm, self).__init__(*args, **kwargs)
       if self.instance.id:
           CHOICES_INCLUDING_DB_VALUE = [(self.instance.field,)*2] + self.MY_CHOICES
           self.fields['my_field'] = forms.ChoiceField(
                choices=CHOICES_INCLUDING_DB_VALUE)
           
class MyAdmin(admin.ModelAdmin):
    form = MyForm