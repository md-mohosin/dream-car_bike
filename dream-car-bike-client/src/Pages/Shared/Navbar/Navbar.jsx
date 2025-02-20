import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.jpeg'

const Navbar = () => {

    const navLinks = <div className="text-xl flex items-center gap-3">
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/'><li>Home</li></NavLink>
    </div>

    return (
        <div>
            <div className="navbar fixed z-10">
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

                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-2xl font-semibold">DREAM</h1>
                            <h1 className="font-semibold">Car & Bike</h1>
                        </div>
                        <img className="w-24" src={logo} alt="" />
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>

                    <FaUserAlt className="ml-2" size={30}></FaUserAlt>
                </div>

            </div>
        </div>
    );
};

export default Navbar;