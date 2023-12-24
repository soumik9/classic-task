import { Link } from "react-router-dom";
import PDetails from "../partials/PDetails";
import Button from "../../../compoents/Button";
import { useAtom } from "jotai";
import { atomIsAuthenticate, atomUser } from "../../../hooks/atomState";
import { useState } from "react";
import { axiosPOST } from "../../../hooks/axiosMethods";
import toast from "react-hot-toast";

const ProductCard = ({ _id, title, image, variations, price }) => {

    // global
    const [user] = useAtom(atomUser);
    const [isAuthenticate] = useAtom(atomIsAuthenticate);

    // states
    const [loading, setLoading] = useState(false);

    // hanlder
    const handleAddToCart = async (_id, price) => {

        const data = {
            user: user._id,
            product: _id,
            price: price,
        }

        try {
            // getting data
            const getPOST = await axiosPOST('cart', data, setLoading);

            // if success
            if (getPOST.success) {
                toast.success(getPOST.message);
            }

        } catch (error) {

            setLoading(false);
            toast.error(`${error.response.data.message}`);
        }
    }

    return (
        <div className="rounded overflow-hidden shadow-lg">
            <Link to={`/product/${_id}`} >

                <img className="w-full hover:scale-75 trans" src={image} alt={title} />

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>

                    <h2 className="text-[18px] my-4">
                        Price: <span className="text-primary">{price} BDT</span>
                    </h2>
                    <ul>
                        {variations.map((variation) => <PDetails key={variation.id} variation={variation} />)}
                    </ul>
                </div>
            </Link>
            <div className="px-6 mb-4">
                <Button
                    text={isAuthenticate ? 'Add To Card' : 'Please Login'}
                    disabled={!isAuthenticate}
                    loadingText='Adding'
                    isLoading={loading}
                    css="w-full"
                    onClick={() => handleAddToCart(_id, price)}
                />
            </div>
        </div>
    );
};

export default ProductCard;
