import express from "express";
import { getRequests,addRequest,deleteRequest,getRequestsFilter } from "../controllers/Categories.controller.js";

const router = express.Router();

router.get("/categories", getRequests);
router.get("/categories/filter", getRequestsFilter);
router.post("/categories", addRequest);
router.delete("/categories/:id", deleteRequest);
// Xuất theo chuẩn ES Module
export default router;
