import express from 'express'
import addToCart from '../controllers/order/addToCart.js';
import getCartItemsById from '../controllers/order/getCartItemsById.js';
import auth from '../middleware/auth.js';
const router = express.Router();

//routes
router.post('/', addToCart);
router.get('/by-id', auth(), getCartItemsById);

export default router;