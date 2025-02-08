import express from "express";
import { getRequests } from "../controllers/Categories.controller.js";

const router = express.Router();

router.get("/request", getRequests);

// Xuất theo chuẩn ES Module
export default router;
