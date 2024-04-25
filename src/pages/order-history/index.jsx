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

        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto mx-44 mt-10">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                                Order ID

                </th>
                <th
                  scope="col"
                  class=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                                Image

                </th>
                <th
                  scope="col"
                  class=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                                Product

                </th>
                <th
                  scope="col"
                  class=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                                Total Amount

                </th>
                <th
                  scope="col"
                  class=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
              Date 
                </th>
              </tr>
            </thead> 
         <tbody>

         <tr>
                  <td class=" py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <div class="text-sm font-medium text-gray-900">
                        0000001                        </div>
                      </div>
                    </div>
                  </td>
                  <td class=" py-4 whitespace-nowrap ">
                  <img src={cutlery} alt="c" className="w-6 h-6 rounded-md" />
                  </td>
                  <td class=" py-4 whitespace-nowrap ">
                    Cutlery
                  </td>
                  
                  <td class=" py-4 whitespace-nowrap text-sm text-gray-500">
                  20/04/2024                  </td>
                  <td class="py-4 whitespace-nowrap text-sm text-gray-500">
                  $500                  </td>
                  
                <td>
                <button className="border rounded-md bg-blue-800 text-white px-2 text-sm">Invoice</button>
                </td>
                </tr>
                
              </tbody>
        </table>
        
        
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