import React, { useEffect, useState } from "react";
import "../index.css";
import Navbar from "../components/navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import spareBg from "../assets/cutlery.jpg";
import engine from "../assets/furniture.avif";
import spareB from "../assets/logo.png";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const imageUrls = [spareBg, engine, spareB];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function getProducts() {
      const docSnap = await getDocs(collection(db, "products"));
      let collectionarray = [];
      docSnap.forEach((result) => {
        collectionarray.push(result.data());
      });
      console.log({ collectionarray });
      setProducts(collectionarray);
    }
    getProducts();
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Navbar />

      <div
        className="mt-4 mx-16 flex items-center justify-center bg-cover bg-center h-80 shadow-lg rounded-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${imageUrls[currentImageIndex]})`,
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="filterrSection mt-5">
              <span className="font-bold mb-2 text-xl">Categories</span>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Electronics")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Electronics
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Clothing")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Clothing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Food")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Food
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={() => handleCategoryChange("Others")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Others
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <section>
              <div className=" flex  mt-20 mb-20  justify-center text-xl">
                <h1 className="text-amber-600 text-4xl font-bold">Products</h1>
              </div>

              <div className="flex flex-col">
                <div className="">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-8 mb-40">
                    {filteredProducts.map((PRODUCTS) => {
                      return (
                        <Link to={`/productdetails/${PRODUCTS.productName}`}>
                          <div className="w-80 h-64 mr-10 bg-white border shadow-xl rounded-xl duration-500 ">
                            <img
                              src={PRODUCTS.image}
                              alt=""
                              className="h-40 w-80 object-cover rounded-tr-xl rounded-tl-xl"
                            />

                            <div className="ml-1">
                              <span className="text-gray-400  uppercase text-md">
                                {PRODUCTS.productName}
                              </span>
                            </div>
                            <span className="ml-1 font-bold">
                              US$: {PRODUCTS.unitPrice}
                            </span>

                            <div className="flex ml-1">
                              <span>Min. order:</span>
                              <p className="ml-1 px-1 bg-violet-100 rounded text-black cursor-auto">
                                {PRODUCTS.minimumOrder}
                              </p>
                              <span>pieces</span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
