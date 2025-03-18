import express from "express";
import { addRequest, getRequests,deleteRequest,updateRequest,getRequestsbyidandtype } from "../controllers/Transactions.controller.js";

const router = express.Router();

router.get("/transactions", getRequests);
router.get("/transactions/filteridtype", getRequestsbyidandtype);
router.post("/transactions", addRequest);
router.delete("/transactions/:id", deleteRequest);
router.put("/transactions/:id", updateRequest);

export default router;
