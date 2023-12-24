import express from 'express';
const router = express.Router();

import authRouter from '../app/routers/authRouter.js'
import productRouter from '../app/routers/productRouter.js'
import cartRouter from '../app/routers/cartRouter.js'

const apiRoutes = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/product',
        route: productRouter,
    },
    {
        path: '/cart',
        route: cartRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;