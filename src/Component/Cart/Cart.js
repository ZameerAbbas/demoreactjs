import React, { useState, useContext } from "react";
import { Createcart } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cartnav from "./Cartnav";
import Sidebar from "./Sidebar";
import Contact from "../Contact/Contact";
import { AiOutlineClose } from "react-icons/ai";
import "./cart.css";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { cartItems, removeFromCart, clearCart, getCartTotal } =
    useContext(Createcart);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };
  console.log(cartItems);
  return (
    <>
      <div className="xl:mx-6 lg:mx-6 md:mx-4 sm:mx-0 ">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Cartnav toggle={toggle} />
        <div className="shophero ">
          <div className="flex hershoptext justify-center content-center  items-center">
            <div className=" ">
              <h1 className=" md:text-3xl lg:text-4xl xl:text-5xl  font-medium capitalize">
                Your Shopping Cart
              </h1>
              <p className="py-2 text-xl">
                Home / Cart /{" "}
                <span className="font-medium">Your Shopping Cart</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center py-14 resposiveone ">
            <div className="w-full md:w-3/5  pl-6 md:pl-2  maincardone">
              <h1 className="font-bold text-lg capitalize">
                your Shopping cart
              </h1>

              {cartItems.length > 0 ? (
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Product</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="px-4 py-2">
                          <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="text-black font-semibold py-1 px-2 rounded"
                          >
                            <AiOutlineClose size={30} color="#00000" />
                          </button>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16"
                            />
                            <span className="ml-2">
                              {item.title.split(" ").slice(0, 3).join(" ")}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2">${item.price}</td>
                        <td className="px-4 py-2">
                          <span className="border border-[#e4e4e4] p-3">
                            {item.quantity}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          ${item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Your cart is empty</p>
              )}
              {/* calculate card */}
              <div className="pt-14">
                <h1 className="font-bold text-lg capitalize md:pl-7">
                  Calculate Shipping
                </h1>
                <div className="border border-solid border-[#e4e4e4] p-4">
                  <div className=" flex lg:justify-center lg:items-center responsiverow">
                    <div className=" flex flex-col  responsiverow">
                      {/* dropdown */}
                      <div className="relative inline-block text-left border border-solid border-[#e4e4e4] my-4   ">
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
                                href=""
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
                      {/*counter code inputs */}
                      <div className="flex justify-between my-4 responsiverow">
                        <input
                          type="text"
                          className="border border-gray-300 p-2 mr-2 input"
                          placeholder="State / Country "
                        />
                        <input
                          type="text"
                          className="border border-gray-300 p-2"
                          placeholder="Postcode / Zip"
                        />
                      </div>

                      {/* submit button */}
                      <button className="bg-[#dedede] capitalize border border-gray-300  p-2 mr-2 my-4 hover:bg-[#d8d4d4]">
                        {" "}
                        Update total
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 pl-12 sm:pl-0 maincode">
              {/* Content for the 40% width div */}

              <div className="w-3/5  codesec">
                {/* Content for the 40% width div */}
                {/* card one */}
                <div className="w-full">
                  {" "}
                  {/* Add w-full to make it take the full width */}
                  <h1 className="font-bold text-lg capitalize">COUPON CODE</h1>
                  <div className="rounded-lg">
                    <div className="text-center mt-4 bg-[#f3f3f3] p-10">
                      <div className="p-2">
                        <input
                          type="text"
                          placeholder="Enter your code here!"
                          className="w-full p-2 focus:outline-none"
                        />
                      </div>
                      <button className="bg-[#dedede] hover:bg-[#d8d4d4] text-[#787878] font-semibold py-2 px-4 rounded mt-2">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card two */}
                <div className="w-full">
                  {" "}
                  {/* Add w-full to make it take the full width */}
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="text-2xl font-semibold text-center">
                      Cart Total
                    </h3>
                    <div className="bg-[#333333] text-white p-4 rounded mt-4">
                      <table className="w-full table-fixed">
                        <tbody>
                          <tr>
                            <td className="w-1/3 p-2 border-b border-dotted border-white">
                              Cart Subtotal
                            </td>
                            <td className="w-1/3 p-2 border-b border-dotted border-white">
                              $ 150.40
                            </td>
                          </tr>
                          <tr>
                            <td className="w-1/3 p-2 border-b border-dotted border-white">
                              Shoping
                            </td>
                            <td className="w-1/3 p-2 border-b border-dotted border-white">
                              free shoping
                            </td>
                          </tr>
                          <tr>
                            <td className="w-1/3 p-2 border-b border-dotted border-white">
                              Total
                            </td>
                            <td className="w-1/3 p-2 border-b border-dotted border-white">
                              $ 150.40
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-between mt-4">
                      <button className="bg-[#dedede] hover:bg-[#d8d4d4] text-[#787878] font-semibold py-2 px-4 rounded">
                        First Button
                      </button>
                      <button className="bg-[#000000] hover:bg-[#222222] text-[#ffff] font-semibold py-2 px-4 rounded">
                        Second Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Cart;
