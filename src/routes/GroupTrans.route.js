import express from "express";
import { getRequests,addRequest,deleteRequest,updateRequest } from "../controllers/GroupTrans.controller.js";

const router = express.Router();

router.get("/grouptrans", getRequests);
router.post("/grouptrans", addRequest);
router.delete("/grouptrans/:id", deleteRequest);
router.put("/grouptrans/:id", updateRequest);

// Xuất theo chuẩn ES Module
export default router;
