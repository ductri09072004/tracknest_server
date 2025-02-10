import express from "express";
import { getRequests } from "../controllers/Transactions.controller.js";

const router = express.Router();

router.get("/transactions", getRequests);

// Xuất theo chuẩn ES Module
export default router;
