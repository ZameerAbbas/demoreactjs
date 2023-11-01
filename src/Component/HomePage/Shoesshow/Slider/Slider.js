import React, { useContext } from "react";
import { Createcart } from "../../../../Context/Context";

import Slider from "react-slick";

const Single = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const { records, cartItems, removeFromCart, addToCart } =
    useContext(Createcart);

  // Slice the records array to show only the first 3 items
  const limitedRecords = records.slice(0, 3);

  return (
    <div className="container-slider">
      <Slider {...settings}>
        {limitedRecords.map((product, index) => (
          <div key={index}>
            <div className="Gridcard flex flex-col text-center   p-4 m-7">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold my-2">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h2>
                <p className="text-lg text-gray-600">${product.price}</p>
              </div>
              <div className="mt-auto">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Single;
