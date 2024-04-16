import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/navbar";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import herobg from "../assets/herobg.png";
import logo from "../assets/logo.png";

const imageUrls = [
  logo,
  logo,
  logo
]

export default function Homepage() {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const [userEmail, setUserEmail] = useState('')
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user);
        setUserEmail(user.email);
        // ...
      } else {
        setUserEmail('');
        // User is signed out
        // ...
      }
    });
  };

  useEffect(getUser, []);
  return (
    <>
      <Navbar />
      <section>
        

        <section
        className="relative py-16 px-4 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
          <h1 className="font-bold text-white w-9/12 lg:w-7/12 md:text-2xl lg:text-4xl">The leading B2B ecommerce platform for global trade.</h1>

          <div className="mt-2 lg:mt-4">
          <input
                class="form-control me-1 w-4/5 rounded-full p-2 md:w-3/5 lg:h-14"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success  me-3" type="submit">
                <i class="fa-solid fa-magnifying-glass text-orange-600 text-xl md:text-2xl"></i>
              </button>
          </div>

          <div className="flex gap-2 text-sm md:text-base text-white font-semibold mt-6">
          <p className="mt-2">Frequently searched:</p>
          <button className="border rounded-full p-1 md:py-1 md:px-2 lg:px-6 hover:bg-green-800">food</button>
          <button className="border rounded-full p-1 hover:bg-green-800">Clothing</button>
          <button className="border rounded-full p-1 hover:bg-green-800">Electronics</button>

          </div>
        </section>


        <section className="bg-orange-300 p-4">

          <div className="text-center">
          <h4>Trade-in-offer</h4>
            <h2>Great value deals</h2>
            <h1>On all Our Products</h1>
            <p>Explore millions of offerings tailored to your business needs</p>
            <button className="bg-white border rounded px-1 font-semibold"> <Link to=""> Become A Supplier</Link></button>
          </div>

          <div id="xxx">
          <div
          style={{
            height: '393px',
            marginTop: '5.5%',
            backgroundImage: `url(${imageUrls[currentImageIndex]})`,
          }}
        >
        </div>

          </div>

          

        </section>



      </section>
    </>
  );
}
