import express from "express";
import cors from "cors";
import contactRouter from "./routers/contact";
import db from "./connection";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Home route
app.get("/", (req, res) => {
  res.send("Hello!");
});
// Contact route
app.use("/contact", contactRouter);

// Start the server
app.listen(3000, () => {
  db();

  console.log(`Listening on port ${process.env.PORT}`);
});
