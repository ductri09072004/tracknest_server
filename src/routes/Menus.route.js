import express from "express";
import { getRequests} from "../controllers/Menus.controller.js";

const router = express.Router();

router.get("/menus", getRequests);
// router.post("/account", addRequest);
// router.delete("/account/:id", deleteRequest);
// router.put("/account/:id", updateRequest);
// Xuất theo chuẩn ES Module
export default router;
