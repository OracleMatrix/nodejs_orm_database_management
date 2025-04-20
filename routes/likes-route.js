const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middlewares/auth");

const likesController = require("../controllers/likes-controller");

router.use(auth);
router.get("/", likesController.getAllLikes);
router.get("/post/:id", likesController.getPostLikes);
router.post("/", likesController.createLike);
router.delete("/delete/:id", likesController.deleteLike);

module.exports = router;
