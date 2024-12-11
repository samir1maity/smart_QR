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
// const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const QRCode = require("qrcode");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.post("/generate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = req.body;
    try {
        const qrCodeData = yield QRCode.toDataURL(JSON.stringify(data));
        res.json({ qrCode: qrCodeData });
    }
    catch (err) {
        res.status(500).send("Error generating QR Code");
    }
}));
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
