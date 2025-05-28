import express from "express";
import { getRequests} from "../controllers/Tables.controller.js";

const router = express.Router();

router.get("/tables", getRequests);
// router.post("/account", addRequest);
// router.delete("/account/:id", deleteRequest);
// router.put("/account/:id", updateRequest);
// Xuất theo chuẩn ES Module
export default router;
