import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const requireAuth = async (req, res, next) =>{
  const {authorization} = req.headers;

  if(!authorization){
    return res.status(401).json({error: 'Authorization token required'})
  }

  // Authorization will contain a string like this "Bearer <token>"
  //so we split the string after a space and made it an array of two elements and grabbed the token which id the second element
  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.user = await User.findOne({_id}).select('_id')
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request not authorized'})
  }
}