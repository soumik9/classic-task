import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../../constants/constant";
import { useAtom } from "jotai";
import { atomIsAuthenticate, atomUser } from "../../hooks/atomState";
import DeskNavItem from "./partials/DeskNavItem";
import { FiShoppingCart } from "react-icons/fi";
import MobileNavItem from "./partials/MobileNavItem";

const Header = () => {

    // global
    const [user] = useAtom(atomUser);
    const [isAuthenticate] = useAtom(atomIsAuthenticate);

    // states
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-3 justify-between items-center navbar bg-primary container">
            {/* Logo */}
            <Link to='/'>
                <img src='/logo.png' width={100} height={20} />
            </Link>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex gap-x-7 hidden justify-end items-center flex-1">
                <DeskNavItem items={isAuthenticate ? navLinks.slice(0, 2) : navLinks} />

                {isAuthenticate ? <>
                    <li>
                        <Link to='/dashboard'>
                            <FiShoppingCart className="font-normal cursor-pointer text-white text-[22px] hover:text-dark-primary-200" />
                        </Link>
                    </li>
                    <li className="text-white">
                        ({user.name})
                    </li>
                </> : null}
            </ul>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex flex-1 justify-end items-center">

                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? <AiOutlineClose className="text-white text-[24px]" /> : <AiOutlineBars className="text-white text-[24px]" />}
                </button>

                {/* Sidebar */}
                <div
                    className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-primary`}
                >
                    <ul className="list-none flex justify-end items-start gap-y-5 flex-1 flex-col">
                        <MobileNavItem
                            items={isAuthenticate ? navLinks.slice(0, 2) : navLinks}
                        />
                        {isAuthenticate ? <>
                            <li>
                                <Link to='/dashboard'>
                                    <FiShoppingCart className="font-normal cursor-pointer text-white text-[22px] hover:text-dark-primary-200" />
                                </Link>
                            </li>
                            <li className="text-white">
                                ({user.name})
                            </li>
                        </> : null}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header