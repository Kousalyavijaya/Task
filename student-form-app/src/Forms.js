export default function StudentFormApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Student Registration Form</h1>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Student Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Department</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Select Department</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>IT</option>
              <option>EEE</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Year</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

