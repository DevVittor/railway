import { Router } from "express";
const router = Router();

import Home from "./homeRoute.js";

router.use("/home", Home);

export default router;
