import { Request, Response } from "express";
import contactModel from "../model/contact";

// Create a contact controller function that will handle the request and response from the route handler
const contactController = async (req: Request, res: Response) => {
  try {
    // Get the contact data from the request body
    const contactData = new contactModel(req.body);

    // Save the contact
    const contact = await contactData.save();

    // Send the contact
    res.status(201).send(contact);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

export default contactController;
