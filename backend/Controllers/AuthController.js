const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");

const signup = async (req, res) => {
  try {
    const { name, email, phoneNo, password } = req.body;

    const user = await UserModel.findOne({ phoneNo });
    if (user) {
      return res.status(409).json({
        message: "User already exists, you can Login",
        success: false,
      });
    }

    const userModel = new UserModel({ name, email, phoneNo, password });
    userModel.password = await bcrypt.hash(password, 10); // Encrpting password for security
    await userModel.save();
    return res.status(201).json({
      message: "Signup successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server Error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { phoneNo, password } = req.body;
    const user = await UserModel.findOne({ phoneNo });
    const errorMessage = "Auth failed email or password is wrong.";
    if (!user) {
      return res.status(403).json({ message: errorMessage, success: false });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);
    console.error(isPasswordEqual ? "OK" : "ERROR");
    if (isPasswordEqual === false) {
      return res.status(403).json({ message: errorMessage, success: false });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      noTimestamp: true,
      expiresIn: "12h",
    });

    return res.status(200).json({
      message: "Login successfully",
      success: true,
      jwtToken,
      phoneNo,
      name: user.name,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server Error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};
