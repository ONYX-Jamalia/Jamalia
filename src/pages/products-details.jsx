import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar.jsx";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const URL = process.env.API;

  useEffect(() => {
    const PRODUCTS = {
      id: 1,
      productName: "Cat",
      price: 15.99,
      weight: "kg",
      productImage:
        "https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?t=st=1713192583~exp=1713196183~hmac=f045a359084a697152016c6d59913292583370c702abb848fa42dff5c098e63f&w=360",
      category: "A",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, modi! Id, labore? Qui maxime dolores magnam, est rerum exercitationem doloribus culpa.",
    };
    setProduct(PRODUCTS);
  }, productId);
  // Fetch product detail with id
  // fetch(`${URL}/${productId}`)
  //     .then(response => response.json())
  //     .then(data => setProduct(data))
  //     .catch(error => console.error('Error fetching product:', error));
//}, [productId, URL]);  //Include productId and URL as dependencies

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gray-100">
        <section className="w-[65%] bg-white py-10 pl-10 m-4">
          <div className="max-w-[1000px] mx-auto flex flex-wrap items-center justify-center">
            <div className="w-full md:w-[50%] lg:w-[40%]">
              <img
                className="w-full mx-auto my-4 pr-5"
                src={product.productImage}
                alt={product.productName}
                style={{ width: "300px" }}
              />
              <hr />
              <h4 className="font-medium py-2">SHARE THIS PRODUCT</h4>
              <div className="flex gap-5">
              <i class="fa-brands fa-facebook-f rounded-full border border-gray-300 p-3 hover:text-orange-500 hover:border-orange-500"></i>
              <i class="fa-brands fa-instagram rounded-full border border-gray-300  p-3 hover:text-orange-500 hover:border-orange-500"></i>
              <i class="fa-brands fa-x-twitter rounded-full border border-gray-300  p-3 hover:text-orange-500 hover:border-orange-500"></i>
              </div>
            </div>
            <div className="w-full md:w-[50%] lg:w-[60%] text-center md:text-left">
             <div className="flex justify-between">
             <h2 className="font-medium py-2">{product.productName}</h2>
              <i class="fa-regular fa-heart pr-10"></i>
             </div>
              <div className="flex flex-wrap">
              <p className="font-bold py-2">$ {product.price}</p>
              <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">In stock</div>
              </div>
              <hr />
              <p className="py-6">{product.description}</p>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>

               <br />
              <button className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:">
                <i className="fa-solid fa-cart-shopping mr-6"></i>ADD TO CART
              </button>
            </div>
          </div>
        </section>
        {/* <section className="w-[20%] bg-white py-16 m-4 text-center md:text-left">
          <div className="justify-center">
            <p>SELLER INFORMATION</p> <hr />
            <h4>Name</h4>
            <h6>54% Seller Score</h6>
            <h6>843 followers</h6>
            <button className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:">FOLLOW</button>
          </div>
          <hr />
          <div>
            <h4>Seller Performance</h4>
          </div>
        </section> */}
      </div>
    </>
  );
}

