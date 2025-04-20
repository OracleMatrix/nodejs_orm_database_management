const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const usersController = require("../controllers/users-controller");

router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.use(auth);
router.put("/update/:id", usersController.updateUser);
router.delete("/delete/:id", usersController.deleteUser);
router.get("/", usersController.getAllUsers);
router.get("/getUserById/:id", usersController.getUserById);
router.get("/getUserByEmail/:email", usersController.getUserByEmail);
router.get("/getUserByName/:name", usersController.getUserByName);

module.exports = router;
