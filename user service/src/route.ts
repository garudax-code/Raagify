import express from 'express';
import { addToPlaylist, loginUser, myProfile, registerUser } from './controller.js';
import { isAuth } from './middleware.js';
const router = express.Router();

router.post("/user/register",registerUser); //register
router.post("/user/login",loginUser) //login
router.get("/user/me",isAuth,myProfile); //get my profile
router.post("/song/:id",isAuth, addToPlaylist);

export default router;