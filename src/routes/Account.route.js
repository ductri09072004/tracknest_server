import express from "express";
import { getRequests,addRequest,deleteRequest ,updateRequest} from "../controllers/Account.controller.js";

const router = express.Router();

router.get("/account", getRequests);
router.post("/account", addRequest);
router.delete("/account/:id", deleteRequest);
router.put("/account/:id", updateRequest);
// Xuất theo chuẩn ES Module
export default router;
