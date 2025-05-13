import Product from "../models/products.model.js"

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const createProducts = async (req, res) => {
  try {
    const products = await Product.create(req.body)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}