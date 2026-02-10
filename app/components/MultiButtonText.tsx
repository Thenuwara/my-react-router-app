import React, { useState } from "react";

function MultiButtonText() {
  const [message, setMessage] = useState("Click a button");

  const handleClick = (text: React.SetStateAction<string>) => {
    setMessage(text);
  };

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => handleClick("You clicked Button 1")}>
        Button 1
      </button>

      <button onClick={() => handleClick("You clicked Button 2")}>
        Button 2
      </button>

      <button onClick={() => handleClick("You clicked Button 3")}>
        Button 3
      </button>
    </div>
  );
}

export default MultiButtonText;
