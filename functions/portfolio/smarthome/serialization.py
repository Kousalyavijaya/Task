import json
import pickle


# -----------------------------
# Smart Home Device Data
# -----------------------------
devices = [
    {"id": 1, "name": "Light", "status": "ON"},
    {"id": 2, "name": "Fan", "status": "OFF"},
    {"id": 3, "name": "AC", "status": "ON"},
    {"id": 4, "name": "Door Lock", "status": "LOCKED"}
]


# -----------------------------
# JSON SERIALIZATION
# -----------------------------
def save_json(data):
    with open("data.json", "w") as f:
        json.dump(data, f, indent=4)
    print("✅ JSON saved")


# -----------------------------
# JSON DESERIALIZATION
# -----------------------------
def load_json():
    with open("data.json", "r") as f:
        data = json.load(f)
    print("✅ JSON loaded")
    return data


# -----------------------------
# PICKLE SERIALIZATION
# -----------------------------
def save_pickle(data):
    with open("data.pkl", "wb") as f:
        pickle.dump(data, f)
    print("✅ Pickle saved")


# -----------------------------
# PICKLE DESERIALIZATION
# -----------------------------
def load_pickle():
    with open("data.pkl", "rb") as f:
        data = pickle.load(f)
    print("✅ Pickle loaded")
    return data


# -----------------------------
# MAIN
# -----------------------------
if __name__ == "__main__":
    save_json(devices)
    save_pickle(devices)

    print(load_json())
    print(load_pickle())