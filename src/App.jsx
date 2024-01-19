import { useState } from "react";
import { Container } from "reactstrap";

const App = () => {
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  return (
    <Container fluid="sm">
      <h1>Aplikasi Ubah Warna</h1>
      <label style={{ marginRight: 10 }}>Warna latar:</label>
      <input
        value={bgColor}
        onChange={(e) => {
          setBgColor(e.target.value);
        }}
        type="color"
      />
      <br />
      <label style={{ marginRight: 10 }}>Warna teks:</label>
      <input
        value={textColor}
        onChange={(e) => {
          setTextColor(e.target.value);
        }}
        type="color"
      />
      <hr />
      <div
        style={{
          height: 500,
          fontSize: 50,
          backgroundColor: bgColor,
          color: textColor,
          fontWeight: "bold",
        }}
      >
        Contoh Teks
      </div>
    </Container>
  );
};

export default App;
