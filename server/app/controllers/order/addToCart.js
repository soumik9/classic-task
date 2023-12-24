import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Cart from "../../models/cartSchema.js";

const addToCart = catchAsync(
    async (req, res) => {

        // finding item by user
        const findCartItem = await Cart.findOne({
            user: req.body.user
        })

        let products = [];

        if (findCartItem) {

            let qty;
            let foundItemInProducts = false;
            let updatedProducts = [];

            updatedProducts = findCartItem.products.map((item) => {
                if (String(item.product) === req.body.product) {
                    qty = item.quantity + 1;
                    foundItemInProducts = true;
                    return {
                        ...item.toObject(),
                        quantity: item.quantity + 1,
                        total: (item.quantity + 1) * req.body.price,
                    };
                }
                return item;
            });

            if (!foundItemInProducts) {
                updatedProducts = [
                    ...updatedProducts,
                    {
                        product: req.body.product,
                        quantity: 1,
                        total: 1 * req.body.price
                    }
                ]
            }

            // updating item
            await Cart.findOneAndUpdate({ user: req.body.user }, {
                $set: {
                    products: updatedProducts
                }
            }, { new: true, runValidators: true })

            sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: !foundItemInProducts ? `Added to cart successfully!` : `Total quantity ${qty} of this item in cart!`,
            });

        } else {
            // creating cart item
            products = [{
                product: req.body.product,
                quantity: 1,
                total: 1 * req.body.price
            }]

            await Cart.create({
                ...req.body,
                products
            });

            sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: `Added to cart successfully!`,
            });
        }

    }
)

export default addToCart