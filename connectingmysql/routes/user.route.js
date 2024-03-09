import express from "express";
import User from "../model/user.model.js";
import { signUp, signIn } from "../controller/user.controller.js";
const router = express.Router();

// http://localhost:3000/user/signup
router.post("/signup",signUp);
router.post("/signin",signIn);
export default router;