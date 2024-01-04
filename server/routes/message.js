import express from "express";
import { getMessage, postMessage } from "../controllers/messages.js";

const router = express.Router();

/* READ */
router.get("/user/:userId", getMessage);


/* POST */
router.post("/message/:messageId", postMessage);

export default router;