import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import { CartItem } from "./cartItem";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const Cart = () => {
  const [itemslist, setItemsList] = useLocalStorage("Item List", []);
  const [subtotalAmount, setSubtotalAmout] = useState(0);
  const [products, setProducts] = useState([]);

  let clearCart = () => {
    setItemsList([]);
    setSubtotalAmout(0);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let totalAmount = () => {
    if (itemslist.length !== 0) {
      let amount = itemslist
        .map((x) => {
          let { item, id } = x;
          let result = products.find((y) => y.id === id) || [];
          return item * result.unitPrice;
        })
        .reduce((x, y) => x + y, 0);
      setSubtotalAmout(amount);
    } else return setSubtotalAmout(0);
  };

  useEffect(() => {
    totalAmount();
    async function getProducts() {
      const docSnap = await getDocs(collection(db, "products"));
      let collectionarray = [];
      docSnap.forEach((result) => {
        collectionarray.push(result.data());
      });
      setProducts(collectionarray);
    }
    getProducts();
  }, [itemslist]);
  console.log({ products });

  const availableItems = itemslist.filter((item) => item.item > 0);
  console.log({ availableItems });

  const finalResults = availableItems.map((item) => ({
    ...products.find((product) => product.id === item.id),
    quantity: item.quantity,
  }));

  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-8">
            <div>
              <h1>Your cart items</h1>
            </div>
            <div>
              {finalResults.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="col-4">
            <div className=" flex flex-col mt-[40px] gap-3 p-3 shadow rounded">
              <p>SubTotal GH&#8373; {subtotalAmount}</p>
              <Link
                className="rounded p-2 cursor-pointer decoration-none text-white bg-black"
                to="/products"
              >
                <button>Continue Shopping</button>
              </Link>{" "}
              <Link
                className="w-full p-2 rounded cursor-pointer decoration-none text-white bg-black"
                to="/invoice"
              >
                <button>Check Out</button>
              </Link>{" "}
              <button
                onClick={() => clearCart()}
                className="bg-red-600 p-2 rounded transition ease-in-out delay-150 hover:bg-red-800 focus:bg-red-800 text-white"
              >
                Clear Cart
              </button>
            </div>
            
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
};
