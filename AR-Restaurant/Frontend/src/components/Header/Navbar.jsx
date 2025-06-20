import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi"; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-4">
           
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex">
                <img
                  className="w-36"
                  src="https://res.cloudinary.com/dhturqqs5/image/upload/v1728842111/SIT%20Project/vf7v4ggt9bzkhpfxvrhr.png"
                  alt="Logo"
                />
              </NavLink>
            </div>
          </div>

          
          <div className="flex items-center lg:hidden">
            
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

      
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <NavLink
              to="/"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              About
            </NavLink>
            <NavLink
              to="/support"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Support
            </NavLink>
            <NavLink
              to="/admin"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Dashboard
            </NavLink>
          </div>

          
          
        </nav>

        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <NavLink
                  to="/"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu} 
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu} 
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/about"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
                <NavLink
                  to="/support"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu}
                >
                  Support
                </NavLink>
                <NavLink
                  to="/admin"
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  onClick={closeMenu} 
                >
                  Dashboard
                </NavLink>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
