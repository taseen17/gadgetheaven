import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation()
    console.log(location)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
        <li><NavLink to="pcb">Pc Builder</NavLink></li>

    </>

    return (
        <div>
            <div className={location.pathname === "/" ? "navbar bg-[#9538E2] max-w-screen-xl mx-auto mt-3 rounded-t-xl" : "navbar bg-white max-w-screen-xl mx-auto mt-3 rounded-t-xl"}>
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
                            {links}
                        </ul>
                    </div>
                    <a className={location.pathname === "/" ? "text-xl font-bold text-white" :"text-xl font-bold text-black" }>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={location.pathname === "/" ? "menu menu-horizontal px-1 text-white font-medium text-base" : "menu menu-horizontal px-1 text-black font-medium text-base"}>
                       {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <NavLink to="dashboard/cart"><button className="btn btn-circle text-xl"><HiOutlineShoppingCart /></button></NavLink>   
                    <NavLink to="dashboard/wishlist"><button className="btn btn-circle text-xl"><FaRegHeart /></button></NavLink>   
                </div>
            </div>

        </div>
    );
};

export default Navbar;