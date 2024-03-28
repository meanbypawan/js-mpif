import express from "express";
import { addToCart, fetchCart, removeFromCart } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add-to-cart",addToCart);
router.get("/items/:userId",fetchCart);
router.post("/remove",removeFromCart);
export default router;