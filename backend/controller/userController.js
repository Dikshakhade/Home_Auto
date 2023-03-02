const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../util/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = await req.body;
  const userExits = await User.findOne({ email });
  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

authUser = asyncHandler(async (req, res) => {
  const { email, password } = await req.body;
  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
module.exports = { registerUser, authUser };
