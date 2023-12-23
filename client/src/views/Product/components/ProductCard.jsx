import { Link } from "react-router-dom";
import PDetails from "../partials/PDetails";
import Button from "../../../compoents/Button";
import { useAtom } from "jotai";
import { atomIsAuthenticate } from "../../../hooks/atomState";

const ProductCard = ({ _id, title, image, variations, price }) => {

    // global
    const [isAuthenticate] = useAtom(atomIsAuthenticate);

    return (
        <Link to={`/product/${_id}`} className="rounded overflow-hidden shadow-lg">

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

            <div className="px-6 mb-4">
                <Button
                    text={isAuthenticate ? 'Add To Card' : 'Please Login'}
                    disabled={!isAuthenticate}
                    css="w-full"
                />
            </div>

        </Link>
    );
};

export default ProductCard;
