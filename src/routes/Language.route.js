import express from "express";
import { getRequests} from "../controllers/Language.controller.js";

const router = express.Router();

router.get("/language/:id", getRequests);

// Xuất theo chuẩn ES Module
export default router;
