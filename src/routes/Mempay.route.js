import express from "express";
import { getRequests,addRequest,deleteRequest,updateRequest } from "../controllers/Mempay.controller.js";

const router = express.Router();

router.get("/mempay", getRequests);
router.post("/mempay", addRequest);
router.delete("/mempay/:id", deleteRequest);
router.put("/mempay/:id", updateRequest);

// Xuất theo chuẩn ES Module
export default router;
