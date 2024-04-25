import React from 'react'
import Navbar from '../components/navbar';
import logo from "../assets/logo.png"
import Footer from '../components/footer';


export const PaymentNotice = () => {
  return (
    <>
    <Navbar/>
        <div class="bg-white-100 h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <div className="flex justify-center items-center">
           <img
            src={logo}
            alt="logo of jamlia app"
            className="w-16 h-8 md:w-24 md:h-12 lg:w-48 lg:h-20 "
          />
           </div>
        <p class="text-gray-600 mb-6">Thank you for doing business with Jamalia</p>
        <a href="/" class="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go
            back to homepage</a>
    </div>
</div>
<Footer/>
    </>
  )
}
