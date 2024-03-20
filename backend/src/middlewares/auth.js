"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.cookies["auth_token"];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId; // we want to add userId in the request cuz we want to pass it to our validate-token request so we need to extend the request 
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
exports.default = verifyToken;
