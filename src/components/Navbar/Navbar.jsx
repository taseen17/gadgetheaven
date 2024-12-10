import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#9538E2] w-11/12 mx-auto mt-3 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Statistics</a></li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold text-white">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-medium text-base">
                        <li><a>Home</a></li>
                        <li><a>Statistics</a></li>
                        <li><a>Dashboard</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn btn-circle text-xl"><HiOutlineShoppingCart /></a>
                    <a className="btn btn-circle text-xl"><FaRegHeart /></a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;