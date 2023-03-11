"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = __importDefault(require("../model/contact"));
// Create a contact controller function that will handle the request and response from the route handler
const contactController = async (req, res) => {
    try {
        // Get the contact data from the request body
        const contactData = new contact_1.default(req.body);
        // Save the contact
        const contact = await contactData.save();
        // Send the contact
        res.status(201).send(contact);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};
exports.default = contactController;
//# sourceMappingURL=contact.js.map