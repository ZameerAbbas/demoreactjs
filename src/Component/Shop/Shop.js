import React, { useState, useEffect, useContext } from "react";
import Shopnav from "./Shopnav";
import "./shop.css";
import Contact from "../Contact/Contact";
import { Createcart } from "../../Context/Context";
import Sidebar from "./Sidebar";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { records, cartItems, addToCart, removeFromCart } =
    useContext(Createcart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="xl:mx-6 lg:mx-6 md:mx-4 sm:mx-0">
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Shopnav toggle={toggle} />

      <div className="shophero">
        <div className="flex hershoptext justify-center content-center  items-center">
          <div className=" ">
            <h1 className=" font-medium capitalize  md:text-3xl lg:text-4xl xl:text-5xl  ">
              Shop Grid full width
            </h1>
            <p className="py-2 text-xl">
              Home / shop /{" "}
              <span className="font-medium "> Shop Grid full width</span>
            </p>
          </div>
        </div>
      </div>
      <div className="NavfilterConatiner flex justify-center items-center"></div>
      <div className="flex justify-between py-7">
        <div>
          <p className="capitalize font-medium">Show all results</p>
        </div>

        <div className="flex justify-between ">
          {/* dropdown */}
          <div className="relative inline-block text-left border border-solid border-black mx-3 ">
            {/* Trigger button */}
            <button
              onClick={toggleDropdown}
              className=" text-balck font-semibold px-4 py-2 rounded inline-flex items-center"
            >
              Dropdown
              <svg
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z"
                />
              </svg>
            </button>

            {/* Dropdown content */}
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* button  */}
          <button className="w-10 h-10 border border-black mx-3  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <button className="w-10 h-10 border border-black bg-black ml-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid Conatiner */}
      <div className="ShopGridConatiner py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {records.map((product) => (
            <div className="Gridcard flex flex-col text-center border rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold my-2"> {product.title.split(" ").slice(0, 3).join(" ")}</h2>
                <p className="text-lg text-gray-600">${product.price}</p>
              </div>
              <div className="mt-auto p-4">
                {!cartItems.find((item) => item.id === product.id) ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="hover:bg-black bg-white border border-black hover:text-white text-black font-semibold py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded-l"
                    >
                      +
                    </button>
                    <p className="text-xl font-semibold mx-2">
                      {
                        cartItems.find((item) => item.id === product.id)
                          .quantity
                      }
                    </p>
                    <button
                      onClick={() => removeFromCart(product)}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-r"
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Shop;
