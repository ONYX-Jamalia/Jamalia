import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <section className="flex justify-between px-2.5 py-1.5 lg:px-6 lg:py-2.5 bg-black">
                <div>
                    <h1 className="text-white font-semibold text-base md:text-xl lg:text-2xl">Jamalia</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-xs focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-6 w-48 bg-slate-800 rounded-lg shadow-xl md:flex flex-col">
                            <div className="py-2">
                                <Link to="/" className="block text-white text-sm px-4 py-2">Home</Link>
                                <Link to="/products" className="block text-white text-sm px-4 py-2 ">Products</Link>
                                <Link to="/addnewproducts" className="block text-white text-sm px-4 py-2 ">AddProducts</Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:block">
                    <div className="text-white flex gap-4 lg:gap-14">
                        <Link to="/" className="hover:text-orange-500" >Home</Link>
                        <Link to="/products" className="hover:text-orange-500">Products</Link>
                        <Link to="/addnewproducts" className="hover:text-orange-500">AddProducts</Link>
                    </div>
                </div>
                
            </section>
        </>
    );
}