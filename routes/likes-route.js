const express = require("express");
const router = express.Router();
const db = require("../models");

const likesController = require("../controllers/likes-controller");

router.get("/", likesController.getLikes);
router.get("/post/:id", likesController.getPostLikes);
router.post("/", likesController.createLike);
router.delete("/delete/:id", likesController.deleteLike);

module.exports = router;
