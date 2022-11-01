import { createOrder, retrieveUserOrders } from '../controller/orders';
import express from 'express';
import { verifyJWT } from '../middleware/verifyJWT';

const router = express.Router();

router.post('/orders/create', createOrder);
router.get('/orders/retrieve-user-ordders', verifyJWT, retrieveUserOrders);

module.exports = router;
