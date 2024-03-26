import express from "express";
import { deleteProduct, list, saveInBluk } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBluk);
router.get("/list",list);
router.delete("/delete/:id",deleteProduct);

export default router;