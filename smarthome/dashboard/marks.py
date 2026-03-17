

from django.db import models
from .persondetails import PersonDetails


class Marks(models.Model):
    person = models.ForeignKey(
        PersonDetails,
        on_delete=models.CASCADE,
        related_name="marks"
    )

    subject = models.CharField(max_length=100)
    marks_obtained = models.FloatField()
    total_marks = models.FloatField(default=100)

    def percentage(self):
        return (self.marks_obtained / self.total_marks) * 100

    def __str__(self):
        return f"{self.person.name} - {self.subject}"