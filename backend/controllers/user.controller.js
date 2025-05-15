import User from "../models/user.model.js";

export const loginUser = async (req, res) => {
  res.json({ message: "Login user" })
}
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}