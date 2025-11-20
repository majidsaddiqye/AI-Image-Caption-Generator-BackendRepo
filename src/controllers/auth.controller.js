const userModel = require("../models/user.models");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//RegisterController
async function registerController(req, res) {
  const { username, password } = req.body;

  const exist = await userModel.findOne({ username });
  if (exist) return res.status(400).json({ message: "Username already taken" });

  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);

  res
    .cookie("token", token)
    .status(201)
    .json({ message: "User Registered", user });
}

//LoginController
async function loginController(req, res) {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Missing credentials" });

  const user = await userModel.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);

  res
    .cookie("token", token)
    .status(201)
    .json({ message: "Login Successful", user });
}

//logout Controller
async function logoutController(req, res) {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logged out successfully" });
}
module.exports = {
  registerController,
  loginController,
  logoutController
};
