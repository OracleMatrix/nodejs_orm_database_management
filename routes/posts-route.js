const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const postsController = require("../controllers/posts-controller");

router.use(auth);
router.post("/create", postsController.createPost);
router.get("/getUserPosts/:userId", postsController.getUserPosts);
router.get("/getPostById/:postId", postsController.getPostById);
router.delete("/delete/:postId", postsController.deletePost);
router.put("/update/:postId", postsController.updatePost);
router.get("/", postsController.getAllPosts);

module.exports = router;
