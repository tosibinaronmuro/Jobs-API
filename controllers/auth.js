const User = require("../schema/index");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const { BadRequest, Unauthenticated} = require("../error");


// register 
const register = async (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !email || !password) {
    throw new BadRequest("please provide name, email and password");
  }
  const user = await User.create({ ...req.body });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name }, token: user.createJWT() });
};



// login
const login = async (req, res, next) => {
    const { email, password } = req.body;
if (!email || !password){
    throw new BadRequest('please provide name, email and password')
}
const user=await User.findOne({email})
if(!user){
    throw new Unauthenticated('user does not exist')
}
const token =user.createJWT()
const isPasswordCorrect=await user.comparePasswords(password)
if(!isPasswordCorrect){
    throw new Unauthenticated('invalid password')
}
res.status(StatusCodes.OK).json({user:{name:user.name},token})
};

module.exports = { login, register };
