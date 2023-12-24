import { useAtom } from "jotai";
import Button from "../../compoents/Button"
import { atomToken, atomUser } from "../../hooks/atomState";
import useAuthLogout from "../../hooks/useAuthLogout";
import { useQuery } from "react-query";
import { axiosGET } from "../../hooks/axiosMethods";
import { Link } from "react-router-dom";

const Dashboard = () => {

    // global
    const { logout } = useAuthLogout();
    const [user] = useAtom(atomUser);
    const [token] = useAtom(atomToken);

    // query
    const { isLoading, isError, data } = useQuery(['cartItems'], async () => {
        try {
            const data = await axiosGET('cart/by-id', token);
            return data;
        } catch (error) {
            console.log(error);
            // toast.error(`${error.response.data.message}`);
        }
    })

    // Calculate the total of all products
    const grandTotal = data?.products.reduce((accumulator, cItem) => accumulator + cItem.total, 0);

    if (isError) return <>Error...</>

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:mx-auto">

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md min-w-[375px] md:min-w-[575px] md:max-w-[575px] mx-auto">
                        <div className="mb-3">
                            <h1 className="text-2xl font-semibold text-center">Hello, {user.name}</h1>
                            <p className="text-center mt-1">Dashboard</p>
                        </div>

                        {isLoading ? <>Loading ...</> : <div className="my-8">
                            <table className="min-w-full border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Product</th>
                                        <th className="py-2 px-4 border-b">Quantity</th>
                                        <th className="py-2 px-4 border-b">Price</th>
                                        <th className="py-2 px-4 border-b">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.products.map((cItem) => <tr key={cItem._id}>
                                        <td className="py-2 px-4 border-b">{cItem.product?.title}</td>
                                        <td className="py-2 px-4 border-b">{cItem.quantity}</td>
                                        <td className="py-2 px-4 border-b">{cItem.product?.price} BDT</td>
                                        <td className="py-2 px-4 border-b">{cItem.total} BDT</td>
                                    </tr>)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3" className="py-2 px-4 font-semibold text-right">Grand Total</td>
                                        <td className="py-2 px-4 font-semibold">{grandTotal} BDT</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>}

                        <div className="mb-8 flex justify-center">
                            <Link to='/' className="text-[22px] underline hover:text-primary trans">Home</Link>
                        </div>



                        <Button
                            text='Logout'
                            css='w-full'
                            onClick={() => logout()}
                        />

                    </div>
                </div>
            </div>

        </div >

    )
}

export default Dashboard