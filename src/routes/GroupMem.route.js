import express from "express";
import { getRequests } from "../controllers/GroupMem.controller.js";

const router = express.Router();

router.get("/groupmem", getRequests);

// Xuất theo chuẩn ES Module
export default router;
