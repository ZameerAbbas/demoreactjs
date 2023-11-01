import React, { useContext } from "react";
import { Createcart } from "../../../../Context/Context";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { records, cartItems, removeFromCart, addToCart } =
    useContext(Createcart);

  return (
    <div className="container-slider">
      <Slider {...settings}>
        {records.map((product, index) => (
          <div key={index}>
            <div className="Gridcard flex flex-col text-center   shadow-lg p-4 m-7">
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

      <div>
        <Link
          to="shop"
          className="flex justify-center items-center  font-medium pt-16 uppercase   "
        >
          {" "}
          <span>view more products </span>
          <span className="px-2 pt-1">
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MultipleItems;
