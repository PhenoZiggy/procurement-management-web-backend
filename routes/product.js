import express from "express"
import { getAllProducts, getProductById, reduceProductStock } from "../controller/products"

const router = express.Router()

router.get("/products/get-all", getAllProducts)
router.get("/products/get-by-id", getProductById)
router.post("/products/reduce-stock", reduceProductStock)

module.exports = router
