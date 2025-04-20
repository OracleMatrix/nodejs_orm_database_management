const express = require("express");
const router = express.Router();
const db = require("../models");
const commentsController = require("../controllers/comments-controller");

router.post("/create", commentsController.createComment);
router.get("/post/:postId", commentsController.getCommentsByPostId);

module.exports = router;
