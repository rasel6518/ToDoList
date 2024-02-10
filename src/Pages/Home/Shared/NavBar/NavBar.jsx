import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';


const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? " bg-emerald-400" : isActive ? " text-xl font-semibold border-b-4 mr-2 border-emerald-600" : "mr-2 text-xl font-semibold"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? " bg-emerald-400" : isActive ? " text-xl font-semibold border-b-4 mr-2 border-emerald-600" : "mr-2 text-xl font-semibold"
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? " bg-emerald-400" : isActive ? " text-xl font-semibold border-b-4 mr-2 border-emerald-600" : "mr-2 text-xl font-semibold"
                }
            >
                Contact
            </NavLink>
        </li>

    </>

    return (
        <div>
            <div className="">
                <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-300 shadow-lg">
                    <div className="md:hidden">
                        <button
                            className="navbar-burger flex items-center text-blue-600 p-3"
                            onClick={handleToggleMenu}
                        >
                            <AiOutlineMenu className="text-xl text-emerald-500"></AiOutlineMenu>
                        </button>
                    </div>

                    <a className="text-3xl text-emerald-500 font-bold leading-none" href="#">
                        ToDo App
                    </a>






                    <ul className={` hidden absolute top-1/2 left-1/2 transform    -translate-y-1/2  -translate-x-1/2 md:flex md:mx-auto md:items-center md:w-auto md:space-x-6 ${isMenuOpen ? '' : ' hidden'}`}>
                        {navlinks}
                    </ul>


                </nav>
                <div className={`navbar-menu w-[450px] duration-1000 top-0 left-0 h-[100vh] md:hidden absolute transition-all z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-[1000px]'}`}>

                    <nav className="fixed   top-0 left-0 bottom-0 flex  flex-col w-5/6 max-w-sm py-6 px-6  bg-white border-r overflow-y-auto">
                        <ul>
                            {navlinks}
                        </ul>
                    </nav>
                    <div className="navbar-backdrop top-2 right-20  fixed " onClick={handleToggleMenu}> <AiOutlineCloseCircle className="text-3xl text-red-500"></AiOutlineCloseCircle> </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;