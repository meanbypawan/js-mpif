import express from "express";
import { addToCart, getCartItemList } from "../controller/cart.controller.js";
const router = express.Router();

router.post("/add-to-cart",addToCart);
router.get("/list/:userId",getCartItemList);
export default router;