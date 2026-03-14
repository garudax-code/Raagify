import express from "express";
import { getAlbum, getAllsongs, getAllSongsOfAlbum, getSingleSong } from "./controller.js";

const router = express.Router();

router.get("/album/all", getAlbum);
router.get("/song/all",getAllsongs)
router.get("/album/:id",getAllSongsOfAlbum)
router.get("/song/:id",getSingleSong)

export default router;