import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    variations: [
        {
            id: {
                type: Number,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            size: [
                {
                    type: String,
                    required: true,
                },
            ],
        },
    ],
});

const Product = model('Product', productSchema);

export default Product;