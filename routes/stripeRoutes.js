import express from "express";
const router = express.Router();

import {
    checkout
} from "../controllers/stripeController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/checkout").post(protect, checkout);

export default router;
