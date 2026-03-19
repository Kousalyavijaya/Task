import React, { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "20px"
    }}>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;