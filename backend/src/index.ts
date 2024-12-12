import express, { Request, Response } from "express";
import cors from "cors";
import QRCode from "qrcode";
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(cors());

app.post("/generate", async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  if (!data) {
    res.status(400).send({ error: "Data is required" });
  }
  try {
    const qrCode = await QRCode.toDataURL(data);
    res.send({ qrCode });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to generate QR code" });
  }
});

app.get("/", async (req: Request, res: Response) => {
  res.send("you hit the entry endpoint")
});

app.listen(process.env.PORT, () => console.log("Server running on http://localhost:5000"));
