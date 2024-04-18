import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocalStorage } from "usehooks-ts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemslist, setItemsList] = useLocalStorage("Item List", []);
  const [totalItems, getItemsTotal] = useState(0);

  let calculate = () => {
    let cartValue = itemslist.map((x) => x.item).reduce((x, y) => x + y, 0);
    getItemsTotal(Math.floor(cartValue));
  };

  useEffect(() => {
    calculate();
  }, [itemslist]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="flex justify-between lg:gap-56 px-2.5 py-1.5 lg:px-6 lg:py-0 bg-neutral-100">
        <div>
          <img
            src={logo}
            alt="logo of jamlia app"
            className="w-16 h-8 md:w-24 md:h-12 lg:w-48 lg:h-20 "
          />
        </div>

        <div className="md:hidden">
          <form className="d-flex flex" role="search">
            <input
              className="form-control me-1 h-8"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success  me-3" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-600 text-xs focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-6 w-48 bg-neutral-100 border border-orange-600 rounded-lg shadow-xl md:flex flex-col">
              <div className="py-2">
                <Link
                  to="/"
                  className="block text-orange-600 text-sm px-4 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="block text-orange-600 text-sm px-4 py-2 "
                >
                  Products
                </Link>
                <Link
                  to=""
                  className="block text-orange-600 text-sm px-4 py-2 "
                >
                  Categories
                </Link>

                <Link
                  to="/signin"
                  className="block text-orange-600 text-sm px-4 py-2 "
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="hidden items-center md:block pt-2 lg:pt-6 md:flex md:gap-12 lg:gap-56">
          <div className="text-white flex gap-4 lg:gap-10">
            <Link
              to="/"
              className="text-sm lg:text-base text-orange-600 hover:text-orange-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm lg:text-base text-orange-600 hover:text-orange-300"
            >
              Products
            </Link>
            <Link
              to=""
              className="text-sm lg:text-base text-orange-600 hover:text-orange-300"
            >
              Categories
            </Link>
            <div className="relative">
              <Link className="text-orange-600 absolute z-10" to="/cart">
                {" "}
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
              <div className="absolute m-0 px-1 top-[-17px] right-[-30px] bg-[#81C408] rounded ">
                <p>{totalItems}</p>
              </div>
            </div>
          </div>

          <div>
            <form className="d-flex flex" role="search">
              <input
                className="form-control me-1 md:h-8 md:w-36 lg:w-52"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success  me-3" type="submit">
                <i className="fa-solid fa-magnifying-glass text-sm lg:text-base"></i>
              </button>
              <Link
                className="btn btn-outline-success text-sm lg:text-base"
                to="/signin"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
