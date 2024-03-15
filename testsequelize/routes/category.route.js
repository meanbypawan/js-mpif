import express from "express";
import { saveInBulk, getCategory } from "../controller/category.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",auth,getCategory);
export default router;