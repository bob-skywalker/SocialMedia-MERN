import express from "express";
import { getMessage } from "../controllers/messages.js";

const router = express.Router();

/* READ */
router.get("/user/:userId", getMessage);


export default router;