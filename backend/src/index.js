"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
mongoose_1.default
    .connect(process.env.MONGODB_CONNECTION_STRING); // write this line on the top of index file as server will crash if it will not work
const app = (0, express_1.default)(); // creating an app 
app.use((0, cookie_parser_1.default)()); // use cookie parser to parse or read the cookie
app.use(express_1.default.json()); // body of Api will convert into json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing the url(params etc)
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL, // server will accept request from this url
    credentials: true
})); // browser prevents frontend on backend run on different ports
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});
