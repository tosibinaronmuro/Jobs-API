const User = require("../schema/index");
const { StatusCodes } = require("http-status-codes");
const { BadRequest } = require("../error");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, password, email } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };

  if (!name || !email || !password) {
    throw new BadRequest("please provide name, email and password");
  }
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res, next) => {
  res.send("login user");
};

module.exports = { login, register };
