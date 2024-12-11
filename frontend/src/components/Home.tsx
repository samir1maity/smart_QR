import { useState } from "react";
import axios from "axios";

function Home() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerate = async () => {
    if (!input) return alert("Please enter some data");
    try {
      const response = await axios.post("http://localhost:5000/generate", {
        data: input,
      });
      console.log('response', response)
      setQrCode(response.data.qrCode);
    } catch (error) {
      alert("Failed to generate QR code");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter data"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Generate QR Code
      </button>
      <div style={{ marginTop: "20px" }}>
        {qrCode && <img src={qrCode} alt="Generated QR Code" />}
      </div>
    </div>
  );
}

export default Home;
