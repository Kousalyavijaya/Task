try:
    a = int(input("Enter number a: "))
    b = int(input("Enter number b: "))

    result = a / b
    print("Result:", result)

except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

except ValueError:
    print("Error: Please enter only numbers!")

except TypeError:
    print("Error: Invalid type operation!")

finally:
    print("Program finished (finally block always runs)")