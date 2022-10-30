import { createOrder } from "../controller/orders"
import express from "express"

const router = express.Router()


router.post("/orders/create", createOrder)

module.exports = router