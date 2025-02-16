const jwt = require("jsonwebtoken");
const User = require("../Models/User");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  const authHeader = req.headers['authorization']; // Get the Authorization header
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }

    // Check if the header starts with 'Bearer'
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token missing in Authorization header' });
    }

  if (!token) {
    return res
      .status(401)
      .send({ message: "Authentication required", success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });
    

    const user = await User.findById(decoded.id); // Assuming `id` is in the JWT payload

    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found", success: false });
    }

    req.user = user; // Attach user object to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log("Error during JWT verification:", error);
    res
      .status(403)
      .json({ message: "Invalid or expired token", token, success: false });
  }
};

module.exports = authenticate;
