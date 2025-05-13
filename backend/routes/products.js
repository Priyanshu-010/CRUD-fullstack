import express from "express";
import { createProducts, getAllProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProducts);

export default router