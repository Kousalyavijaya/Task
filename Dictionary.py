student = {
    "name": "Kousalya",
    "age": 21,
    "course": "CS"
}
print(student["name"])
print(student["age"])
student["age"] = 22
print(student["age"])
student["college"] = "RIT"
print(student)
student.pop("course")
print(student)
for key, value in student.items():
    print(key, value)