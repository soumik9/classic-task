import { useParams } from "react-router-dom";
import PDetails from "./partials/PDetails";
import Button from "../../compoents/Button";
import { useAtom } from "jotai";
import { atomIsAuthenticate } from "../../hooks/atomState";
import { useQuery } from "react-query";
import { axiosGET } from "../../hooks/axiosMethods";

const ProductDetails = () => {

    // get params
    const { productId } = useParams();

    // global
    const [isAuthenticate] = useAtom(atomIsAuthenticate);

    // query
    const { isLoading, isError, data: product } = useQuery(['product'], async () => {
        try {
            const data = await axiosGET(`product/${productId}`);
            return data;
        } catch (error) {
            console.log(error);
            // toast.error(`${error.response.data.message}`);
        }
    })

    if (isError) return <>Error...</>
    if (isLoading) return <>Loading...</>

    if (!product) {
        return <div>Product not found</div>;
    }

    const { title, image, variations, desc, price } = product;

    return (
        <div className="container mt-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 pb-10 md:pb-0">

                <div className="lg:col-span-2 mb-5 md:mb-0">
                    <img src={image} alt={title} />
                </div>

                <div>
                    <h2 className="text-[32px]">{title}</h2>


                    <h2 className="text-[22px] my-4">
                        Price: <span className="text-primary">{price} BDT</span>
                    </h2>

                    <div className="my-4">
                        <ul className="border border-secondary-400 px-4 pt-4 rounded-lg">
                            {variations.map((variation) => <PDetails key={variation.id} variation={variation} />)}
                        </ul>
                    </div>

                    <div className="mb-5">
                        <p className="text-justify">{desc}</p>
                    </div>

                    <Button
                        text={isAuthenticate ? 'Add To Card' : 'Please Login'}
                        disabled={!isAuthenticate}
                        css="w-full"
                    />
                </div>

            </div>
        </div>
    )
}

export default ProductDetails