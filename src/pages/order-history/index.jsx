import React from "react"
import cutlery from "../../assets/cutlery.jpg";
import { Link } from "react-router-dom";
import furniture from "../../assets/furniture.avif";

export default function OrderHistory(){
    return(
        <>
        <div className="flex justify-between mt-20 lg:gap-56 px-2.5 py-1.5 lg:px-6 lg:py-10 bg-orange-600 text-white" >
            <h1 className="ml-20 font-bold text-3xl">Order History</h1>
    
            <h3 className=" flex mr-20 font-semibold">Shop <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</span>order history</h3>
            
        </div>

        <div className="flex justify-between mt-20 lg:gap-2 px-2.5 py-1.5 mx-40 font-bold">
            <h5>Order ID</h5>
            <h5 className="mr-32">Product</h5>
            <h5>Date</h5>
            <h5 className="mr-20">Total Amount</h5>
            <h5 className="mr-56">Status</h5>
        </div>
        <hr className="mx-40" />
        <div className="flex justify-between mt-3 lg:gap-2 px-2.5 py-1.5 mx-40 font-bold">
            <h5>0000001</h5>
           <div  className="mr-32 flex">
            <img src={cutlery} alt="c" className="w-6 h-6" />
           <h5>Cutlery</h5>
           </div>
            <h5 className="ml-4 text-gray-500">17/04/2024</h5>
            <h5 className="mr-32">$500</h5>
            <button className="mr-20 border rounded-md text-green-700 bg-green-200 px-2 text-sm">delivered</button>
            <button className="border rounded-md bg-blue-800 text-white px-2 text-sm">Invoice</button>
        </div>
        <hr className="mx-40 mt-3" />
        <div className="flex justify-between mt-3 lg:gap-2 px-2.5 py-1.5 mx-40 font-bold">
            <h5>0000001</h5>
           <div  className="mr-32 flex">
            <img src={cutlery} alt="c" className="w-6 h-6" />
           <h5>Cutlery</h5>
           </div>
            <h5 className="ml-4 text-gray-500">20/04/2024</h5>
            <h5 className="mr-32">$500</h5>
            <button className="mr-20 border rounded-md text-blue-800 bg-blue-200 px-2 text-sm">shipping</button>
            <button className="border rounded-md bg-blue-800 text-white px-2 text-sm">Invoice</button>
        </div>
        <hr className="mx-40 mt-3" />
        <div className="flex justify-between mt-3 lg:gap-2 px-2.5 py-1.5 mx-40 font-bold">
            <h5>0000001</h5>
           <div  className="mr-32 flex">
            <img src={furniture} alt="c" className="w-6 h-6" />
           <h5>Cutlery</h5>
           </div>
            <h5 className="ml-4 text-gray-500">20/04/2024</h5>
            <h5 className="mr-32">$500</h5>
            <button className="mr-20 border rounded-md text-yellow-400    bg-yellow-100 px-2 text-sm">pending</button>
            <button className="border rounded-md bg-blue-800 text-white px-2 text-sm">Invoice</button>
        </div>
        <hr className="mx-40 mt-3" />
        <div className="flex justify-between mt-3 lg:gap-2 px-2.5 py-1.5 mx-40 font-bold">
            <h5>0000001</h5>
           <div  className="mr-32 flex">
            <img src={cutlery} alt="c" className="w-6 h-6" />
           <h5>Cutlery</h5>
           </div>
            <h5 className="ml-4 text-gray-500">20/04/2024</h5>
            <h5 className="mr-28">$500</h5>
            <button className="mr-12 border rounded-md text-red-400    bg-red-100 px-2 text-sm">out of delivery</button>
            <button className="border rounded-md bg-blue-800 text-white px-2 text-sm">Invoice</button>
        </div>
        <hr className="mx-40 mt-3" />
        
        <div className="flex justify-end mt-5 mr-20 motion-reduce:animate-bounce">
        <Link
            to="/searchS"
            class="flex items-center text-white w-62 border border-blue-700 bg-blue-700 py-2 px-3 gap-2 rounded-md "
          >
            <span>continue shopping</span>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          </div>
        </>
    )
} 