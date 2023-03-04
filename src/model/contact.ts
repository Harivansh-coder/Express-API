import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
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
  }
);

const contactModel = mongoose.model("Contact", contactSchema);

export default contactModel;
