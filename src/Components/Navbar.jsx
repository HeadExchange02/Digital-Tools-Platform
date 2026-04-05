import React from "react";
import logo from "../assets/DigiTools.png";

const Navbar = ({ cartCount, setActiveTabs }) => {
  return (
    <nav className="w-full border-b border-purple-400 bg-white py-4">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-10">
        {/* Left Side: Logo */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-0 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-white rounded-box w-52 border border-gray-100 font-medium"
            >
              <li>
                <a
                  href="#"
                  onClick={() => setActiveTabs("Products")}
                  className="hover:text-[#7C3AED] transition-all cursor-pointer"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#7C3AED] transition-all cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#7C3AED] transition-all cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#7C3AED] transition-all cursor-pointer"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#7C3AED] transition-all cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li className="sm:hidden">
                <a href="" className="text-[#7C3AED] font-bold">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center cursor-pointer">
            <img
              className="h-6 sm:h-8  md:h-10 w-auto object-contain"
              src={logo}
              alt="DigiTools"
            />
          </div>
        </div>

        {/* Center Side: Menu Items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-[15px] font-medium text-gray-600">
            <li>
              <a href="#" className="hover:text-[#7C3AED] transition-all">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7C3AED] transition-all">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7C3AED] transition-all">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7C3AED] transition-all">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7C3AED] transition-all">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Icons & Buttons */}
        <div className="navbar-end gap-1  md:gap-5">
          {/* Cart Icon with Counter */}
          <div className="relative p-2 cursor-pointer">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="badge badge-sm indicator-item bg-[#7C3AED] border-none text-white text-[10px] h-4 w-4 p-0">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Login Text */}
          <button className="text-xl text-gray-700 font-semibold hover:text-[#7C3AED] hidden sm:block">
            Login
          </button>

          {/* Get Started Button */}
          <button className="btn bg-linear-130 from-violet-800 to-purple-500 hover:bg-purple-800 text-white border-none rounded-full px-6 md:px-8 font-bold capitalize">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
