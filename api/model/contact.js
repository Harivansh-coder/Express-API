"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    // No Need for this
    // date: {
    //   type: Date,
    //   default: Date.now,
    // },
}, 
// Adds createdAt and updatedAt fields
{
    timestamps: true,
});
const contactModel = mongoose_1.default.model("Contact", contactSchema);
exports.default = contactModel;
//# sourceMappingURL=contact.js.map