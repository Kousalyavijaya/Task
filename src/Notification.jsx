import React, { useState } from "react";

function Notification() {
  const [message, setMessage] = useState("");

  const showNotification = () => {
    setMessage("Action Successful!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={showNotification}>Show Notification</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Notification;