import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// We added 'cartCount' to the props so we can show the number of items
const Navbar = ({ user, setUser, cartCount = 0 }) => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="relative z-50 shadow-xl bg-gradient-to-br from-white to-green-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-600 to-green-400 bg-clip-text">
                    Lk Supply Chain
                </div>
            </Link>

            {/* Links - Removed 'Seasons', Added 'Marketplace' */}
            <ul className="hidden gap-8 font-medium text-gray-600 md:flex"> 
                <li className="transition-colors cursor-pointer hover:text-green-600">
                    <Link to="/">Home</Link>
                </li>
                {/* NEW: The Shop Link */}
                <li className="font-bold text-green-700 transition-colors cursor-pointer hover:text-green-600">
                    <Link to="/marketplace">🌱 Buy Seeds & Plants</Link>
                </li>
                <li className="transition-colors cursor-pointer hover:text-green-600">
                    <Link to="/about">About</Link>
                </li>
                <li className="transition-colors cursor-pointer hover:text-green-600">
                    <Link to="/services">Services</Link>
                </li>
                <li className="transition-colors cursor-pointer hover:text-green-600">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            {/* --- RIGHT SIDE: CART & USER --- */}
            <div className="flex items-center gap-6">
                
                {/* 🛒 NEW: SHOPPING CART ICON */}
                <Link to="/cart" className="relative group">
                    <div className="p-2 transition-colors rounded-full hover:bg-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    {/* Badge: Only shows if items are in cart */}
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full shadow-sm">
                            {cartCount}
                        </span>
                    )}
                </Link>

                {/* USER AUTH SECTION */}
                <div className="pl-4 border-l border-gray-300">
                    {user ? (
                        // LOGGED IN VIEW
                        <div className="flex items-center gap-4">
                            <div className="hidden text-right sm:block">
                                <p className="text-sm font-bold text-gray-800">{user.name}</p>
                                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                    {user.role}
                                </span>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 font-bold text-green-700 bg-green-200 rounded-full">
                                {user.name.charAt(0)}
                            </div>

                            <button 
                                onClick={handleLogout} 
                                title="Logout"
                                className="p-2 text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-red-500 hover:border-red-200 hover:bg-red-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        // GUEST VIEW
                        <Link to="/login">
                            <button className='flex items-center gap-2 px-6 py-2.5 font-medium text-white transition-transform bg-teal-500 rounded-full shadow-lg hover:scale-105 shadow-teal-500/40'>
                                Login / Sign Up &rarr;
                            </button>
                        </Link>
                    )}
                </div>
            </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;