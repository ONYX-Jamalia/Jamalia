import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from "../assets/logo.png"

export default function Invoice() {
  const [formInfo, setFormInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can use the formInfo state for further processing or submission
  };

  return (
    <>
    <Navbar/>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-6">
            <div className="w-full max-w-lg mx-auto p-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-6">
                  Payment Information
                </h2>
                <form>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="card-number"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="card-number"
                        id="card-number"
                        placeholder="0000 0000 0000 0000"
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="expiration-date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        placeholder="MM / YY"
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="cvv"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="number"
                        name="cvv"
                        id="cvv"
                        placeholder="000"
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="card-holder"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Card Holder
                      </label>
                      <input
                        type="text"
                        name="card-holder"
                        id="card-holder"
                        placeholder="Full Name"
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="bg-white border text-left rounded-lg shadow px-6 py-8 max-w-md mx-auto mt-8">
           <div className="flex justify-center items-center">
           <img
            src={logo}
            alt="logo of jamlia app"
            className="w-16 h-8 md:w-24 md:h-12 lg:w-48 lg:h-20 "
          />
           </div>
              <hr class="mb-2" />
              <div class="flex justify-between mb-6">
                <h1 class="text-lg font-bold">Invoice</h1>
                <div class="text-gray-700">
                  <div>Date: 01/05/2023</div>
                  <div>Invoice #: INV12345</div>
                </div>
              </div>
              <div class="mb-8">
                <h2 class="text-lg font-bold mb-4">Bill To:</h2>
                <div class="text-gray-700 mb-2">John Doe</div>
                <div class="text-gray-700 mb-2">123 Main St.</div>
                <div class="text-gray-700 mb-2">Anytown, USA 12345</div>
                <div class="text-gray-700">johndoe@example.com</div>
              </div>
              <table class="w-full mb-8">
                <thead>
                  <tr>
                    <th class="text-left font-bold text-gray-700">
                      Description
                    </th>
                    <th class="text-right font-bold text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left text-gray-700">Product 1</td>
                    <td class="text-right text-gray-700">$100.00</td>
                  </tr>
                  <tr>
                    <td class="text-left text-gray-700">Product 2</td>
                    <td class="text-right text-gray-700">$50.00</td>
                  </tr>
                  <tr>
                    <td class="text-left text-gray-700">Product 3</td>
                    <td class="text-right text-gray-700">$75.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="text-left font-bold text-gray-700">Total</td>
                    <td class="text-right font-bold text-gray-700">$225.00</td>
                  </tr>
                </tfoot>
              </table>
              <div class="text-gray-700 mb-2">Thank you for your business!</div>
              <div class="text-gray-700 text-sm">
                Please remit payment within 30 days.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
