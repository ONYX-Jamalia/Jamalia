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
           <section>
              <div className=" flex  mt-20 mb-20  justify-center text-xl">
                <h1 className="text-amber-600 text-4xl font-bold">Products</h1>
              </div>
              
              <div className="flex flex-col mb-80 ml-20 w-10/12 ">
              <div className="  grid gap-x-8 gap-y-4 grid-cols-4">
                <div className= "flex flex-nowrap">
                {filteredProducts.map((PRODUCTS) =>{
                  return(
                    <div className="w-80 h-64 mr-10 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                    <img
                    src={PRODUCTS.productImage}
                    alt=""
                    className="h-40 w-80 object-cover rounded-t-xl"
                  />
            
                    <div className="flex justify-start w-80">
                    <span className="mr-44 text-gray-400  uppercase text-xl">
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
