import express from 'express';
import { loginUser, myProfile, registerUser } from './controller.js';
import { isAuth } from './middleware.js';
const router = express.Router();
router.post("/user/register", registerUser); //register
router.post("/user/login", loginUser); //login
router.get("/user/me", isAuth, myProfile); //get my profile
export default router;
//# sourceMappingURL=route.js.map