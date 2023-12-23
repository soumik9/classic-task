import express from 'express'
const router = express.Router();

import getProducts from '../controllers/product/getProducts.js';
import getProduct from '../controllers/product/getProduct.js';

//routes
router.get('/', getProducts);
router.get('/:id', getProduct);

export default router;