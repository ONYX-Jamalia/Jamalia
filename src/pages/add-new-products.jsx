import Navbar from "../components/navbar";

export default function AddNewProducts() {
  return (
    <>
      <Navbar />
      <section className="bg-slate-100 p-6">
        <h1 className="text-xl font-bold mb-2">Add New Product</h1>

        <div>
            <div className="bg-white p-2 border border-slate-300 rounded">
                <h3 className="mb-2">Product Information</h3>

                <form className="border border-slate-300 rounded p-2">
                   <label for="productname">Product Name</label><br/>
                   <input type="text" id="productname" placeholder="Input your product name" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"/><br/>

                   <label for="description">Product Description</label><br/>
                    <textarea id="description" placeholder="Input your description here" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3 h-24"></textarea><br/>

                    <label for="category">Product Category</label><br/>
                    <select className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3">
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                        <option value="Others">Others</option>
                    </select>

                    <label for="unitprice">Unit Price</label>
                    <div className="flex items-center">
                        <input type="number" id="unitprice" placeholder="Input price" className="border border-slate-300 rounded w-full p-1 mt-2.5 mb-3"/>
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
                        </select>
                    </div>

                    <label for="minimunorder">Minumun Order</label><br/>
                   <input type="text" id="minumunorder" placeholder="Input minimum quantity" className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"/><br/>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}
