import express from "express";
import { saveInBulk, getCategory } from "../controller/category.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",getCategory);
export default router;