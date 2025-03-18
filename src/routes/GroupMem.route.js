import express from "express";
import { getGroups, addGroup, deleteGroup, updateGroup } from "../controllers/GroupMem.controller.js";

const router = express.Router();

router.get("/groups", getGroups);
router.post("/groups", addGroup);
router.delete("/groups/:id", deleteGroup);
router.put("/groups/:id", updateGroup);

export default router;
