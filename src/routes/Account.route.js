import express from "express";
import { getRequests,addRequest,deleteRequest ,updateRequest} from "../controllers/Account.controller.js";

const router = express.Router();
//lấy ds tài khoản
router.get("/account", getRequests);
//thêm tài khoản
router.post("/account", addRequest);
//xóa tài khoản
router.delete("/account/:id", deleteRequest);
//cập nhật tài khoản
router.put("/account/:id", updateRequest);
// Xuất theo chuẩn ES Module
export default router;
