from django.contrib import admin
from .models1 import Room, Device, Sensor, AutomationRule, DeviceLog

admin.site.register(Room)
admin.site.register(Device)
admin.site.register(Sensor)
admin.site.register(AutomationRule)
admin.site.register(DeviceLog)