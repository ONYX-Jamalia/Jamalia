import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

export const  Sidebar = ({sidebarToggle, setsetUserPage}) => {

  return (
    <div className={`${sidebarToggle ? " hidden " : " block " } ease-in-out lg:w-72 bg-neutral-100 border fixed h-full px-2 py-2`}>
      <div className="my-2 flex flex-col items-center justify-center">
        <img src={logo} alt="logo of jamalia app" className="w-26 h-16 lg:w-32 lg:h-20"/>
        <h1 className="text-sm lg:text-2xl text-green-700 font-bold ">Supplier Dashboard</h1>
      </div>
        <hr />
        <ul className="mt-3 text-black font-bold">
          
          <li className="text-sm mb-2 rounded hover:shadow hover:bg-green-700 hover:text-white py-2" onClick={()=> setsetUserPage('dashboard')}>
            
            <Link to="/supplierdashboard" className="px-2"><i className="fa-solid fa-house inline-block 1-6 h-6 mr-2 -mt-2 "></i>Dashboard</Link>
          </li>
          <li className="text-sm mb-2 rounded hover:shadow hover:bg-green-700 hover:text-white py-2"  onClick={()=> setsetUserPage('posts')}>
            
            <Link to="/addnewproducts" className="px-2"><i class="fa-solid fa-plus h-6 mr-2 -mt-2"></i>Add New Product</Link>
          </li>
        </ul>
    </div>
  );
};