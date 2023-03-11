import express from "express";
import cors from "cors";
import contactRouter from "./routers/contact";
import db from "./connection";
import rateLimitMiddleware from "./middleware/ratelimit";

const app = express();

// Cors options
const corsOptions = {
  origin: "https://www.harivansht.tech/",
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimitMiddleware);
// Routes

// Home route
app.get("/api", (req, res) => {
  res.send("Hello!");
});

// Contact route
app.use("/api/contact", contactRouter);

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  db();

  console.log(`Listening on port ${PORT}`);
});
