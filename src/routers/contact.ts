import express from "express";
import contactController from "../controllers/contact";
import validateRequest from "../middleware/validate";
import { validationSchema } from "../utility/validation";

// Create a router
const router = express.Router();

// POST /contact
router.post("/", validateRequest(validationSchema), contactController);
export default router;
