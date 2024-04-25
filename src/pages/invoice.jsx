import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from "../assets/logo.png"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useLocalStorage } from "usehooks-ts";
import shortid from "shortid"
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Invoice() {
  const [itemslist, setItemsList] = useLocalStorage("Item List", []);
  const [date, setDate] = useState(new Date());
  const [subtotalAmount, setSubtotalAmout] = useState(0);
  const [products, setProducts] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [userId, setUserId] = useState('')

  const navigate =useNavigate()

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });


  const [formInfo, setFormInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    cardOwner: "",
    expirationDate: "",
    cvv: "",
  });
  
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId('');
        }
      } catch (error) {
        console.log({error})
      }
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      email: userDetails.email,
      address: userDetails.address,
      cardNumber: formInfo.cardNumber,
      cardOwner: formInfo.cardOwner,
      expirationDate: formInfo.expirationDate,
      cvv: formInfo.cvv
      })
    const results = await addDoc(collection(db, "orders"),
    {
      // email: userDetails.email,
      address: userDetails.address,
      cardNumber: formInfo.cardNumber,
      cardOwner: formInfo.cardOwner,
      expirationDate: formInfo.expirationDate,
      cvv: formInfo.cvv
      });

    if(results){
      navigate("/payment-notice")
      setItemsList([]);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let totalAmount = () => {
    if (itemslist.length !== 0) {
      let amount = itemslist
        .map((x) => {
          let { item, id } = x;
          let result = products.find((y) => y.id === id) || [];
          return item * parseFloat(result.unitPrice);
        })
        .reduce((x, y) => x + y, 0);
      setSubtotalAmout(amount);
    } else return setSubtotalAmout(0);
  };

  const getProducts =async ()=> {
    const docSnap = await getDocs(collection(db, "products"));
    let collectionarray = [];
    docSnap.forEach((result) => {
      collectionarray.push(result.data());
    });
    let items = itemslist
        .map((x) => {
          let { item, id } = x;
          let result = collectionarray.find((y) => y.id === id) || [];
          return result;
        })
    setProducts(items);
    setInvoice(shortid.generate())
  }

  const getUserDetails = async () => {
    const q = await query(
      collection(db, "users"),
      where("userId", "==", `${userId}`)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // below commented code is to get the id of the single product
      // console.log(doc.id, " => ", doc.data());
      setUserDetails(doc.data());
      console.log(doc.data());
    });
  };

  useEffect(() => {
    getProducts();
    getUser();
    getUserDetails();
    totalAmount();
  }, [itemslist]);

  const availableItems = itemslist.filter((item) => item.item > 0);
  console.log({ availableItems });

  const finalResults = availableItems.map((item) => ({
    ...products.find((product) => product.id === item.id),
    quantity: item.quantity,
  }));
  console.log({ finalResults });


  return (
    <>
    <Navbar/>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-6">
            <div className="w-full max-w-lg mx-auto p-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-6">
                  Payment Information
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="card-number"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        id="card-number"
                        placeholder="0000 0000 0000 0000"
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="expiration-date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        placeholder="MM / YY"
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="cvv"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="number"
                        name="cvv"
                        id="cvv"
                        placeholder="000"
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        for="card-ownwer"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Card Holder
                      </label>
                      <input
                        type="text"
                        name="cardOwnwer"
                        id="card-owner"
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="bg-white border text-left rounded-lg shadow px-6 py-8 max-w-md mx-auto mt-8">
           <div className="flex justify-center items-center">
           <img
            src={logo}
            alt="logo of jamlia app"
            className="w-16 h-8 md:w-24 md:h-12 lg:w-48 lg:h-20 "
          />
           </div>
              <hr class="mb-2" />
              <div class="flex justify-between mb-6">
                <h1 class="text-lg font-bold">Invoice</h1>
                <div class="text-gray-700">
                  <div>Date: {formattedDate}</div>
                  <div>Invoice #: {invoice}</div>
                </div>
              </div>
              <div class="mb-8">
                <h2 class="text-lg font-bold mb-4">Bill To:</h2>
                <div class="text-gray-700 mb-2">{userDetails.conpanyName}</div>
                <div class="text-gray-700 mb-2">{userDetails.address} </div>
                <div class="text-gray-700 mb-2">{userDetails.email}</div>
                <div class="text-gray-700"> {userDetails.contactDetails} </div>
              </div>
              <table class="w-full mb-8">
                <thead>
                  <tr>
                    <th class="text-left font-bold text-gray-700">
                      Description
                    </th>
                    <th class="text-left font-bold text-gray-700">
                      Quantity
                    </th>
                    <th class="text-right font-bold text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((data, index)=>{
                    return(
                      <>
                      <tr>
                    <td class="text-left text-gray-700">{data.productName}</td>
                    <td class="text-left text-gray-700">{itemslist[index].item}</td>
                    <td class="text-right text-gray-700">${data.unitPrice * itemslist[index].item}</td>
                  </tr></>
                    )
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td class="text-left font-bold text-gray-700">Total</td>
                    <td class="text-right font-bold text-gray-700">${subtotalAmount}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="text-gray-700 mb-2">Thank you for your business!</div>
              <div class="text-gray-700 text-sm">
                Please remit payment within 30 days.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
