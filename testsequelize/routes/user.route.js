import express from "express";
import { signUp, signIn } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/signUp",
body("username","Username is required").notEmpty(),
body("password","Password is required").notEmpty(),
body("password","Password must have at least 6 letter").isLength({min: 6}),
body("email","Invalid email").isEmail(),
body("email","Email id is required").notEmpty(),
body("contact","Contact is required").notEmpty(),
body("contact","Only digit allowed").isNumeric(),signUp);

router.post("/signIn",signIn);
export default router;