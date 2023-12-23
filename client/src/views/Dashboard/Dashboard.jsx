import { useAtom } from "jotai";
import Button from "../../compoents/Button"
import { atomUser } from "../../hooks/atomState";
import useAuthLogout from "../../hooks/useAuthLogout";

const Dashboard = () => {

    const { logout } = useAuthLogout();
    const [user] = useAtom(atomUser);

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md min-w-[375px] mx-auto">
                        <div className="mb-3">
                            <h1 className="text-2xl font-semibold text-center">Hello, {user.name}</h1>
                            <p className="text-center mt-1">Dashboard</p>
                        </div>

                        <Button
                            text='Logout'
                            css='w-full'
                            // isLoading={loading}
                            // loadingText='Creating'
                            onClick={() => logout()}
                        />

                    </div>
                </div>
            </div>

        </div >

    )
}

export default Dashboard