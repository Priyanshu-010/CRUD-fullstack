import Product from "../models/products.model.js"

export const getAllProducts = async (req, res) => {
  try {
    const user_id = req.user._id
    const products = await Product.find({user_id}).sort({createdAt: -1})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const createProducts = async (req, res) => {
  const {name, description, price} = req.body;
  try {
    const user_id = req.user._id

    const products = await Product.create({name, description, price, user_id})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const getSingleProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const products = await Product.findById(id)
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const products = await Product.findById(id)
    if(!products){
      res.status(404).json({ message: "Product not found" })
    }

    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(updateProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const products = await Product.findById(id)
    if(!products){
      res.status(404).json({ message: "Product not found" })
    }

    await Product.findByIdAndDelete(id)
    res.status(200).json({ message: "Product deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}