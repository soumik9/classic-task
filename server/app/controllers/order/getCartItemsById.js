
import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Cart from "../../models/cartSchema.js";

const getCartItemsById = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await Cart.findOne({ user: req?.user._id }).populate({
            path: 'products.product',
            model: 'Product', // specify the model to use for populating 'product'
        });;

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Cart items retrived successfully!`,
            data: data
        });
    }
)

export default getCartItemsById