import express from "express";
import { saveInBulk } from "../controller/category.controller.js";

const router = express.Router();
router.post("/save-in-bulk",saveInBulk);
export default router;