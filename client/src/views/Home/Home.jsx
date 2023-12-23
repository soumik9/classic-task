import { useQuery } from "react-query";
import ProductCard from "../Product/components/ProductCard"
import { axiosGET } from "../../hooks/axiosMethods";

const Home = () => {

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
                {data.map((item) => (
                    <ProductCard
                        {...item}
                        key={item._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home