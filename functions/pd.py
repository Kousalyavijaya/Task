import pandas as pd

data = {
    "Name": ["Ram", "Sam", "Tom"],
    "Marks": [85, 90, 78],
    "City": ["Chennai", "Madurai", "Trichy"]
}

df = pd.DataFrame(data)

print(df)
print("\nAverage Marks:", df["Marks"].mean())