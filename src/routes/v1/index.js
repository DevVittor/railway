import { Router } from "express";
const router = Router();

import Home from "./homeRoute.js";
import User from "./userRoute.js";

router.use("/home", Home);
router.use("/user", User);

export default router;
