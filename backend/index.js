import express from "express"
import dotenv from "dotenv"
import productRouter from "./routes/products.js"
import userRouter from "./routes/user.js"
import { connectdb } from "./utils/connect.js";
import cors from "cors"

dotenv.config()

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

app.listen(process.env.PORT , () => {
  console.log("Server running on port 3000")
  connectdb();
})