// const cors = require("cors");
// const QRCode = require("qrcode");

import express, { Request, Response } from "express";
import cors from "cors";
import QRCode from "qrcode";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/generate", async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const qrCode = await QRCode.toDataURL(JSON.stringify(data));
    res.send(qrCode);
  } catch (err) {
    res.status(500).send("Error generating QR Code");
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
