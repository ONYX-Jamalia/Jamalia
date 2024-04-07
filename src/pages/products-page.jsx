import React, { useState } from "react";
import products1 from '../assets/cutlery.jpg'
import products2 from '../assets/furniture.avif'


function Products() {
  const PRODUCTS = [
    {
        id: 1,
        productName: "Cutlery",
        price: 15.99,
        weight: 'kg',
        productImage: products1,
        category: "A"
    },
    {
        id: 2,
        productName: "furniture",
        price: 12.99,
        weight: 'kg',
        productImage: products2,
        category: "B"
    },
   
]
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((product) => product.category === selectedCategory)
    : PRODUCTS;

    

  return (
    <>
      <div class="container">
        
      <div className="flex flex-col space-x-10" class="mt-5">
              <h3 className="mb-5 text-sm">Categories</h3>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Cat A")}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  A
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Cat B")}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  B
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Cat C")}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  C
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Cat D")}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  D
                </label>
              </div>
            </div>
          </div>
        


          <section>
              <div className="  ml-96 item-center text-xl">
                <h1>Products</h1>
              </div>
              
              <div className="flex flex-col mb-80 ml-20">
              <div className=" w-10/12 grid grid-cols-4 gap-36   ">
                <div className= "flex flex-nowrap">
                {filteredProducts.map((PRODUCTS) =>{
                  return(
                    <div className="w-80 h-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl space-x-44">
                    <img
                    src={PRODUCTS.productImage}
                    alt=""
                    className="h-40 w-80 object-cover rounded-t-xl"
                  />
            
                    <div className="flex justify-start w-80">
                    <span className="mr-44 text-gray-400  uppercase text-xs">
                    {PRODUCTS.productName}                   
                     </span>
                    </div>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                    {PRODUCTS.weight}   </p>
                    
                      <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {PRODUCTS.price}
                      </p>
                  

                      </div>
                  )
                  })}
                  </div>
                  </div>
                  </div>
                  </section>
    </>
  );
}

export default Products;
