import { Router } from "express";
const router = Router();

import registerUser from "../../controller/userController.js";

router.post("/register", registerUser);

export default router;
