const jwt = require("jsonwebtoken");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const db = require("../models");
const UserModel = db.users;

const registerUser = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Check if user already exists
    const existingUser = await UserModel.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existingUser)
      return res.status(400).send({ message: "User already exists" });

    // Create new user
    const user = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    }).catch((err) => {
      return res.status(400).send({ message: err });
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
    const userData = _.pick(user, ["id", "name", "email"]);
    res.status(201).send({
      message: "User registered successfully",
      user: userData,
      token: token,
    });
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};

const loginUser = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // Check if user exists
    const user = await UserModel.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(400).send({ message: "User not found" });

    // Check password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
      return res.status(400).send({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
    const userData = _.pick(user, ["id", "name", "email"]);
    res.status(200).send({
      message: "User logged in successfully",
      user: userData,
      token: token,
    });
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId)
      return res.status(400).send({ message: "User ID is required" });

    const schema = Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // Check if user exists
    const user = await UserModel.findByPk(req.params.id);
    if (!user) return res.status(400).send({ message: "User not found" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Update user
    await UserModel.update(
      {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};

const deleteUser = async (req, res) => {
  try {
    // Check if user exists
    const user = await UserModel.findByPk(req.params.id);
    if (!user) return res.status(400).send({ message: "User not found" });

    // Delete user
    await UserModel.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).send(
      users.map((user) => {
        return _.pick(user, ["id", "name", "email", "password"]);
      })
    );
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (!user) return res.status(400).send({ message: "User not found" });
    res.status(200).send(_.pick(user, ["id", "name", "email", "password"]));
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};
const getUserByEmail = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { email: req.params.email },
    });
    if (!user) return res.status(400).send({ message: "User not found" });
    res.status(200).send(_.pick(user, ["id", "name", "email"]));
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};
const getUserByName = async (req, res) => {
  try {
    const user = await UserModel.findOne({ where: { name: req.params.name } });
    if (!user) return res.status(400).send({ message: "User not found" });
    res.status(200).send(_.pick(user, ["id", "name", "email"]));
  } catch (error) {
    res.status(500).send({ message: `Internal Server Error\nError: ${error}` });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByName,
};
