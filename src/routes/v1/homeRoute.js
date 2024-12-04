import { Router } from "express";
const router = Router();

import homePage from "../../controller/homeController.js";

router.get("/", homePage);

export default router;
