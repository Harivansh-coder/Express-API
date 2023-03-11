"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contact_1 = __importDefault(require("./routers/contact"));
const connection_1 = __importDefault(require("./connection"));
const ratelimit_1 = __importDefault(require("./middleware/ratelimit"));
const app = (0, express_1.default)();
// Cors options
const corsOptions = {
    origin: "https://www.harivansht.tech/",
    optionsSuccessStatus: 200,
};
// Middleware
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(ratelimit_1.default);
// Routes
// Home route
app.get("/api", (req, res) => {
    res.send("Hello!");
});
// Contact route
app.use("/api/contact", contact_1.default);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    (0, connection_1.default)();
    console.log(`Listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map