from django.db import models


class Room(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Device(models.Model):
    name = models.CharField(max_length=100)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Sensor(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    sensor_type = models.CharField(max_length=100)
    value = models.FloatField()
    recorded_at = models.DateTimeField(auto_now_add=True)


class AutomationRule(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    condition = models.CharField(max_length=200)
    action = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)


class DeviceLog(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)