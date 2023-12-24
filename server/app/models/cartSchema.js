import { Schema, model, Types } from 'mongoose';

const cartSchema = new Schema({
    products: [
        {
            product: {
                type: Types.ObjectId,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                required: true,
            },
            total: {
                type: Number,
                required: true,
            },
        },
    ],
    user: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Cart = model('Cart', cartSchema);
export default Cart;