import ProductCard from "./components/ProductCard"
import { useQuery } from "react-query";
import { axiosGET } from "../../hooks/axiosMethods";

const Product = () => {

    // query
    const { isLoading, isError, data } = useQuery(['products'], async () => {
        try {
            const data = await axiosGET('product');
            return data;
        } catch (error) {
            console.log(error);
            // toast.error(`${error.response.data.message}`);
        }
    })

    if (isError) return <>Error...</>
    if (isLoading) return <>Loading...</>

    return (
        <div className="container mt-10">
            <div className="grid xll:grid-cols-4 gap-5">
                {data.length ? data.map((item) => (
                    <ProductCard
                        {...item}
                        key={item._id}
                    />
                )) : 'no data'}
            </div>
        </div>
    )
}

export default Product