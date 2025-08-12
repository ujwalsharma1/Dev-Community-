const jwt = require("jsonwebtoken");
const User = require("../models/DevUser");

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // if (!authorization || !authorization.startsWith("Bearer ")) {
    //   return res.status(401).json({ message: "No token provided" });
    // }

    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY); // decoded payload
    console.log(decoded);
    const userFind = await User.findById(decoded.userId); // safer method
    console.log(userFind);
    if (!userFind) {
      return res.status(404).json({ message: "User Not Found" });
    }

    req.user = userFind // attach user to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token", error: err.message });
  }
};

module.exports = { authMiddleware };
