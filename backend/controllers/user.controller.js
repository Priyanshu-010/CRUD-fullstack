import User from "../models/user.model.js";
import jwt from "jsonwebtoken"

export const createToken = (_id) =>{
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({email, token});
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({email, token});
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}