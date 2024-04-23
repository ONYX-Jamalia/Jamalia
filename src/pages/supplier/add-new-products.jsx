import { useEffect, useState } from "react";
import { auth, db, storage } from "../../config/firebase.js";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';

export default function AddNewProducts() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [userPage, setsetUserPage] = useState("add-new-products");
  const [imgUrl, setImgUrl] = useState(null);
  const [imgResult, setImgResult] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [unitPrice, setUnitPrice] = useState("");
  const [minimumOrder, setMinimumOrder] = useState("");
  const [userId, setUserId] = useState('')
  const [products, setProducts] = useState(null)
  const [discount, setDiscount] = useState(0); // Added discount state

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(imgUrl);
      if (imgUrl) {
        const storageRef = ref(storage, `images/${imgUrl.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imgUrl);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (imageurl) => {
              const uuid = uuidv4();
              await addDoc(collection(db, "products"), {
                id: uuid,
                userId: userId,
                productName: productName,
                description: description,
                category: category,
                unitPrice: unitPrice,
                minimumOrder: minimumOrder,
                discount: discount, // Added discount field
                image: imageurl
              });
            });
          }
        );
      }

      console.log("Form submitted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

    const getSingleProduct = async () => {
      const q = await query(
        collection(db, "products"),
        where("userId", "==", `${userId}`)
      );
      const querySnapshot = await getDocs(q);
      const productsArray = []
      querySnapshot.forEach((doc) => {
        // below commented code is to get the id of the single product
        // console.log(doc.id, " => ", doc.data());
        const productDetails = doc.data();
        productsArray.push(productDetails)
        setProducts(doc.data());
      });
      console.log({productsArray});
      console.log({ querySnapshot });
    };
    

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          console.log(user);
          setUserId(user.uid);
        } else {
          setUserId('');
        }
      } catch (error) {
        console.log({error})
      }
    });
  };

  

  useEffect(()=>{
    getUser()
    getSingleProduct()
  },[]);

  const handleClear = () => {
    setProductName("");
    setDescription("");
    setCategory("");
    setUnitPrice("");
    setMinimumOrder("");
    setDiscount(0); // Reset discount
  };

  return (
    <>
      <section className="ml-14 p-6">
        <div>
          <section className="p-6">
            <h1 className="text-xl text-green-700 font-bold mb-2 md:text-center md:text-2xl">
              Add New Product
            </h1>

            <div className="md:flex md:justify-center">
              <div className="bg-white p-2 border border-slate-300 rounded md:w-3/4 lg:w-3/5">
                <h3 className="mb-2 md:font-semibold md:text-xl">
                  Product Information
                </h3>

                <form
                  className="border border-slate-300 rounded p-2"
                  onSubmit={handleSubmit}
                >
                  <label for="productname" className="text-slate-700 md:text-xl">
                    Product Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="productname"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Input your product name"
                    className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"
                  />
                  <br />

                  <label for="description" className="text-slate-700 md:text-xl">
                    Product Description
                  </label>
                  <br />
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Input your description here"
                    className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3 h-24"
                  ></textarea>
                  <br />

                  <label for="category" className="text-slate-700 md:text-xl">
                    Product Category
                  </label>
                  <br />
                  <select
                    className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                    <option value="Sports">Sports</option>
                    <option value="Others">Others</option>
                  </select>

                  <label for="productimage" className="text-slate-700 md:text-xl">
                    Product Image
                  </label>
                  <br />
                  <input
                    type="file"
                    id="productimage"
                    accept="image/*"
                    className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"
                    onChange={(e) => setImgUrl(e.target.files[0])}
                  />
                  <br />

                  <label for="unitprice" className="text-slate-700 md:text-xl">
                    Unit Price
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="unitprice"
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(e.target.value)}
                      placeholder="Input price"
                      className="border border-slate-300 rounded w-full p-1 mt-2.5 mb-3"
                    />
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

                  <label for="minimumorder" className="text-slate-700 md:text-xl">
                    Minumum Order
                  </label>
                  <br />
                  <input
                    type="text"
                    id="minumumorder"
                    value={minimumOrder}
                    onChange={(e) => setMinimumOrder(e.target.value)}
                    placeholder="Input minimum quantity"
                    className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"
                  />
                  <br />

                  {/* Add discount input field */}
                  <label for="discount" className="text-slate-700 md:text-xl">
                    Discount (%)
                  </label>
                  <br />
                  <input
                    type="number"
                    id="discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    placeholder="Input discount"
                    className="border border-slate-300 rounded w-full p-1 mt-0.5 mb-3"
                  />
                  <br />

                  <button
                    type="submit"
                    className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2 ml-2"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section>
            <img src={imgUrl} alt="imge" />
          </section>

        </div>
      </section>
    </>
  );
}
