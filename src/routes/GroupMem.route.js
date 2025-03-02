import express from "express";
import { getRequests,addRequest,deleteRequest,updateRequest } from "../controllers/GroupMem.controller.js";

const router = express.Router();

router.get("/groupmem", getRequests);
router.post("/groupmem", addRequest);
router.delete("/groupmem/:id", deleteRequest);
router.put("/groupmem/:id", updateRequest);

// Xuất theo chuẩn ES Module
export default router;
