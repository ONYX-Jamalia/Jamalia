import { useState } from "react";
import Navbar from "../components/navbar";

export default function AddNewProducts() {

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [minimumOrder, setMinimumOrder] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to submit form data to backend server
        console.log("Form submitted successfully!");
    };

    const handleClear = () => {
        setProductName('');
        setDescription('');
        setCategory('');
        setUnitPrice('');
        setMinimumOrder('');
    };


  return (
    <>
      <Navbar />
      <section className="bg-slate-100 p-6">
        <h1 className="text-xl font-bold mb-2 md:text-center md:text-2xl">Add New Product</h1>

        <div className="md:flex md:justify-center">
            <div className="bg-white p-2 border border-slate-300 rounded md:w-3/4 lg:w-3/5">
                <h3 className="mb-2 md:font-semibold md:text-xl">Product Information</h3>

                <form className="border border-slate-300 rounded p-2" onSubmit={handleSubmit}>
                   <label for="productname" className="text-slate-700 md:text-xl">Product Name</label><br/>
                   <input type="text" id="productname" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Input your product name" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"/><br/>

                   <label for="description" className="text-slate-700 md:text-xl">Product Description</label><br/>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Input your description here" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3 h-24"></textarea><br/>

                    <label for="category" className="text-slate-700 md:text-xl">Product Category</label><br/>
                    <select className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                        <option value="Others">Others</option>
                    </select>

                    <label for="productimage" className="text-slate-700 md:text-xl">Product Image</label><br/>
                    <input type="file" id="productimage" accept="image/*" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"/><br/>

                    <label for="unitprice" className="text-slate-700 md:text-xl">Unit Price</label>
                    <div className="flex items-center">
                        <input type="number" id="unitprice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} placeholder="Input price" className="border border-slate-300 rounded w-full p-1 mt-2.5 mb-3"/>
                        <select className="border border-slate-300 rounded p-1">
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GHS</option>
                          <option value="JPY">JPY</option>
                        </select>
                        <select className="border border-slate-300 rounded p-1">
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="l">l</option>
                          <option value="ml">ml</option>
                          <option value="pcs">pcs</option>
                          <option value="bag">bag</option>
                        </select>
                    </div>

                    <label for="minimumorder" className="text-slate-700 md:text-xl">Minumum Order</label><br/>
                   <input type="text" id="minumumorder" value={minimumOrder} onChange={(e) => setMinimumOrder(e.target.value)} placeholder="Input minimum quantity" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"/><br/>

                   <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>

                   <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2 ml-2" onClick={handleClear}>Clear</button>

                </form>
            </div>
        </div>
      </section>
    </>
  );
}
