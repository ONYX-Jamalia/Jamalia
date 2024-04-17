import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase.js";
import { useLocalStorage } from "usehooks-ts";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const params = useParams();
  const [id, setId] = useState(null);
  const [itemslist, setItemsList] = useLocalStorage("Item List", []);
  let itemslists = JSON.parse(localStorage.getItem("Items Lists")) || [];

  const handleAddToCart = (id) => {
    const updatedItemsList = [...itemslist]; //copy of the itemslist
    const index = updatedItemsList.findIndex((item) => item.id === id);
    if (index !== -1) {
      updatedItemsList[index].item += 1;
    } else {
      updatedItemsList.push({ id, item: 1 });
    }
    setItemsList(updatedItemsList); // Update the state with the updated itemslist
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      const q = await query(
        collection(db, "products"),
        where("productName", "==", `${params.productName}`)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // below commented code is to get the id of the single product
        // console.log(doc.id, " => ", doc.data());
        setId(doc.id);
        console.log(doc.id);
        addToCart(doc.id);
        setProduct(doc.data());
      });
      console.log({ querySnapshot });
    };
    setItemsList(itemslist);

    getSingleProduct();

    const addToCart = (itemId) => {
      let selectedItem = itemId;
      let result = itemslists.find((x) => x.id === selectedItem);

      if (result === undefined) {
        itemslists.push({
          id: selectedItem,
          item: 1,
        });
      } else {
        // If item exists, increment its quantity by 1
        result.item += 1;
      }
      // Update localStorage
      // localStorage.setItem("Item List", JSON.stringify(itemslist));
    };
  }, [productId, params.productName]);

  console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-[87vh] bg-gray-100">
        <section className="w-[65%] h-[76vh] bg-white py-10 pl-10 m-4">
          <div className="max-w-[1000px] mx-auto flex flex-wrap items-center justify-center">
            <div className="w-full md:w-[50%] lg:w-[40%]">
              <img
                className="w-full mx-auto my-4 pr-5"
                src={product.image}
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
                <h2 className="font-medium py-2 capitalize">
                  {product.productName}
                </h2>
                <i className="fa-regular fa-heart pr-10"></i>
              </div>
              <div className="flex flex-wrap">
                <p className="font-bold py-2">$ {product.unitPrice}</p>
                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                  In stock
                </div>
              </div>
              <hr className="items-center ml-14 w-96" />
              <p className="py-6 px-10 text-center">{product.description}</p>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>
              <i class="fa-solid fa-star pb-5 text-yellow-500"></i>

              <br />
              <button
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 md:"
                onClick={() => handleAddToCart(id)}
              >
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
