import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function MultiButtonText() {
  const [message, setMessage] = useState("Click a button !");

  return (
    <div style={{ padding: 20 }}>
      <h2>{message}</h2>
 
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => setMessage("Button 1 clicked")}
        >
          Button 1
        </Button>

        <Button
          variant="outlined"
          onClick={() => setMessage("Button 2 clicked")}
        >
          Button 2
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => setMessage("Button 3 clicked")}
        >
          Button 3
        </Button>
      </Stack>
    </div>
  );
}

export default MultiButtonText;
