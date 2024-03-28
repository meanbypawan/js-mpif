import express from "express";
import { getProfile, signIn, signUp, updateProfile } from "../controller/user.controller.js";
import {body} from "express-validator";
import multer from "multer";
const upload = multer({dest: "public/images/"});
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
router.post("/update-profile",upload.single("profile"),updateProfile);
router.get("/profile/:userId",getProfile);
export default router;








