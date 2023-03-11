"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGO_URL || "";
const db = async () => {
    console.log("Connecting to MongoDB...");
    try {
        // Connect to the MongoDB cluster
        const con = await mongoose_1.default.connect(uri);
        console.log("MongoDB Connected", con.connection.host);
    }
    catch (err) {
        console.error(err);
        console.log("MongoDB connection failed");
    }
};
// Export the client
exports.default = db;
//# sourceMappingURL=connection.js.map