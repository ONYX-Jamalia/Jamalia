import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/navbar";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import herobg from "../assets/herobg.png";
import logo from "../assets/logo.png";
import electron1 from "../assets/electronic1.png";
import electron2 from "../assets/electronic2.png";


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


        <section className="bg-orange-600 p-4 md:flex md:py-10 lg:py-16">

          <div className="text-center">
          <h4 className="md:text-xl">Trade-in-offer</h4>
            <h2 className="md:text-3xl">Great value deals</h2>
            <h1 className="md:text-3xl">On all Our Services</h1>
            <p className="md:text-xl">Explore millions of offerings tailored to your business needs</p>
            <button className="bg-green-800  rounded px-1 font-semibold text-white md:text-xl md:p-2"> <Link to=""> Become A Supplier</Link></button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl front-bold">Carousel goes here</h1>

          </div>

        </section>


        <section className="flex gap-4 md:gap-10 py-10 px-4">
          <div className="w-3/5 md:w-9/12">
            <h1 className="text-sm font-semibold md:text-xl lg:text-4xl">Explore products and suppliers for your business from millions of offerings worldwide</h1>
          </div>

          <div className="w-2/5 flex gap-2 lg:gap-10 ">
            <div>
              <div className="border-l md:border-l-2 border-slate-400 mb-2 lg:mb-4 pl-1 md:pl-2 lg:pl-6">
                <h1 className="text-orange-600 font-semibold text-lg md:text-xl lg:text-4xl">200M+</h1>
                <p className="text-sm md:text-lg lg:font-semibold">Products</p>
              </div>
              <div className="border-l md:border-l-2 border-slate-400 pl-1 md:pl-2 lg:pl-6">
                <h1 className="text-orange-600 font-semibold text-lg md:text-xl lg:text-4xl">200K+</h1>
                <p className="text-sm md:text-lg lg:font-semibold">Suppliers</p>
              </div>
            </div>
            <div>
              <div className="border-l md:border-l-2 border-slate-400 mb-2 lg:mb-4 pl-1 md:pl-2 lg:pl-6">
                <h1 className="text-orange-600 font-semibold text-lg md:text-xl lg:text-4xl">5,900</h1>
                <p className="text-sm md:text-lg lg:font-semibold"> Categories</p>
              </div>
              <div className="border-l md:border-l-2 border-slate-400 pl-1 md:pl-2 lg:pl-6">
                <h1 className="text-orange-600 font-semibold text-lg md:text-xl lg:text-4xl">200+</h1>
                <p className="text-sm md:text-lg lg:font-semibold">Countries</p>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-slate-50">

          <div>
            <h1 className="font-semibold">Discover your next business opportunity</h1>
          </div>

          <div>

            <div id="electronics" className="bg-white">
              <img src={electron1} alt="electronic device" />

              <img src={electron2} alt="electronic device" />
            </div>

            <div id="cosmetics"></div>

            <div id="furniture"></div>

          </div>
        </section>



      </section>
    </>
  );
}
