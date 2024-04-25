import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState("");

  const userProducts = async () => {
    const q = await query(
      collection(db, "products"),
      where("userId", "==", `${userId}`)
    );
    const querySnapshot = await getDocs(q);
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      // below commented code is to get the id of the single product
      // console.log(doc.id, " => ", doc.data());
      const productDetails = doc.data();
      productsArray.push(productDetails);
    });
    setProducts(productsArray);
    // console.log(productsArray);
    console.log({ querySnapshot });
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          console.log({ user });
          setUserId(user.uid);
          // ...
        } else {
          setUserId("");
          // User is signed out
          // ...
        }
      } catch (error) {
        console.log({ error });
      }
    });
  };

  useEffect(() => {
    getUser();
    userProducts();
  }, []);

  return (
    <div className="md:flex md:justify-center ml-28 p-6">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Medium Order
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => {
                    return (
                      <>
                        <tr  key={index} className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {product.productName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {product.description}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {product.minimumOrder}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
