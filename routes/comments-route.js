const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middlewares/auth");
const commentsController = require("../controllers/comments-controller");

router.use(auth);
router.post("/create", commentsController.createComment);
router.get("/post/:postId", commentsController.getCommentsByPostId);

module.exports = router;
