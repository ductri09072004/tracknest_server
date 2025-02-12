import express from "express";
import { addRequest, getRequests } from "../controllers/Transactions.controller.js";

const router = express.Router();

router.get("/transactions", getRequests);
router.post("/transactions", addRequest);

export default router;
