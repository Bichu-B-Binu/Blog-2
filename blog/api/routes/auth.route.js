import express from "express";
import { signin, signup, google } from "../controllers/auth.controler.js";

const router = express.Router();

router.post("/signUp", signup);
router.post("/signIn", signin);
router.post("/google", google);

export default router;
