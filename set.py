A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print("Union:", A | B)
print("Intersection:", A & B)
print("Difference (A - B):", A - B)
print("Symmetric Difference:", A ^ B)

A.add(10)
print("After adding 10:", A)

A.remove(2)
print("After removing 2:", A)

B.add(15)
print("After adding 15:",)

B.remove(5)
print("After removing 5:", B)