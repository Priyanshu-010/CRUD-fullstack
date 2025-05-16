import express from "express";
import { createProducts, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/product.controller.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();
// Below is the middleware for protecting the routes
router.use(requireAuth)

router.get("/", getAllProducts);
router.post("/", createProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router