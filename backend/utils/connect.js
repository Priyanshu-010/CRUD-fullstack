import mongoose from "mongoose"

export const connectdb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
  } catch (error) {
    console.log(error)
  }
}