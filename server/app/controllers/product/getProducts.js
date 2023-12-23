import httpStatus from "http-status";
import sendResponse from "../../../utils/helpers/SendResponse.js";
import catchAsync from "../../../utils/helpers/catchAsync.js";
import Product from "../../models/productSchema.js";

const getProducts = catchAsync(
    async (req, res) => {

        // finding profile
        const data = await Product.find();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Products retrived successfully!`,
            data: data
        });
    }
)

export default getProducts