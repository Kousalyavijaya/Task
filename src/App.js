import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StudentManager from "./StudentManager"; // 👈 add this

function App() {
  return (
    <div>
      <Header />

      <h2 style={{ textAlign: "center" }}>Welcome to Student App</h2>

      {/* 👇 Hooks component add பண்ணுறோம் */}
      <StudentManager />

      <Footer />
    </div>
  );
}

export default App;