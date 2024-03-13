import express from "express";
import { deletProduct, getProduct, getProductList, saveInBluk } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBluk);
router.get("/byId/:id",getProduct);
router.get("/list",getProductList);
router.delete("/byId/:id",deletProduct);

export default router;