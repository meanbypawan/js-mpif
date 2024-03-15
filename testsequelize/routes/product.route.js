import express from "express";
import { deletProduct, getProduct, getProductList, saveInBluk } from "../controller/product.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBluk);
router.get("/byId/:id",auth,getProduct);
router.get("/list",auth,getProductList);
router.delete("/byId/:id",auth,deletProduct);

export default router;