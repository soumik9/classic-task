import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Product from "../../models/productSchema.js";

const getProduct = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await Product.findOne({ _id: req.params.id });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Product retrived successfully!`,
            data: data
        });
    }
)

export default getProduct