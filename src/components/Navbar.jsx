import React, { useState } from "react";
import  { assets } from "../assets/assets"; // Assuming you have a Menuicon component
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all shadow-xl sticky top-0 z-50">
        <a>
            <img src={assets.logoIcon} alt="Logo" className="w-30 h-30 -my-10" />
            
        </a>
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-4 rounded-full">
                <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
               <img src={assets.searchIcon} alt="Search"  />
        </div>
        <div className=" flex cursor-pointer lg:w-1/6 justify-between gap-2 shrink-0">
               <img src={assets.cartIcon} alt="Cart"  />
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                Login
            </button>
        </div>

        <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="sm:hidden"
            >
            {isOpen ? (
              <img src={assets.closeIcon} alt="Close Menu"  />
            ) : (
              <img src={assets.menuIcon} alt="Open Menu"  />
            )}
        </button>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'flex' : 'hidden'}  absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-4 px-5 text-sm md:hidden`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
           
            <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                Login
            </button>
           
        </div>

    </nav>
     );
    };
    
export default Navbar;