import Button from "@mui/material/Button";

function OkButton() {

  return (
    <Button variant="contained" onClick={() => alert("ok")}>
      OK
    </Button>
  );
}

export default OkButton;
