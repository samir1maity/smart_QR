"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const qrcode_1 = __importDefault(require("qrcode"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/generate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = req.body;
    if (!data) {
        res.status(400).send({ error: "Data is required" });
    }
    console.log('data', data);
    const url = `http://localhost:3000/display?data=${encodeURIComponent(data)}`;
    try {
        const qrCode = yield qrcode_1.default.toDataURL(data);
        console.log('qrCode', qrCode);
        res.send({ qrCode });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to generate QR code" });
    }
}));
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
