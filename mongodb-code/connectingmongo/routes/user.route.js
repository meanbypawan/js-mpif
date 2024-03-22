import express from "express";
import { save, getUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/save",save);
router.get("/list",getUser);
export default router;