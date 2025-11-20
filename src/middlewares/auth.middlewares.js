const userModel = require("../models/user.models");
const JWT = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized No token" });

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const user = await userModel
      .findOne({
        _id: decoded.id,
      })
      .select("-password -__v");

    if (!user) return res.status(404).json({ message: "User not found" });

    
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token, Login Again" });
  }
}

module.exports = { authMiddleware };
