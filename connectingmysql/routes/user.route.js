import express from "express";
import User from "../model/user.model.js";
import { signUp, signIn } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

// http://localhost:3000/user/signup
router.post("/signup",body("username").notEmpty()
,body("email","Invalid Email Id").notEmpty().isEmail(),
body("password","password must have at least 6 letter").notEmpty().isLength({min: 5}),
body("contact","Only digit allowed").notEmpty().isNumeric(),signUp);
router.post("/signin",signIn);
export default router;