import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";
import {body} from "express-validator";

const router = express.Router();

// http://localhost:3000/user/signup
router.post("/signup",body("username","username is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password should contain at least 6 letter").isLength({min: 6}),
body("email","email is required").notEmpty(),
body("email","Invalid email id").isEmail(),
body("contact","contact is required").notEmpty(),
body("contact","only digit allowed").isNumeric(),signUp);

router.post("/signin",signIn);
export default router;