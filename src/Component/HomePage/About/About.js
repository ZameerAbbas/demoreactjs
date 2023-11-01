import React from "react";
import cagarette from "../../../images/image.jpg";
import "./About.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
  return (
    <div className="mainabout">
      <div class="flex  flex-col lg:flex-row">
        <div class="w-3/5  fullmadia1 ">
          <img src={cagarette} alt="grte" className="w-full" />
        </div>
        <div class="w-2/5 flex justify-center items-center content-center fullmadia ">
          <div className=" cacrd ">
            <div className="py-12 pl-20  sm:pl-10 md:pl-16 lg:pl-20 xl:pl-36 ">
              <div>
                <h1 className="sm:text-2lg md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                  Men with
                </h1>
                <h1 className="sm:text-2lg md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none">
                  cigaretee pipe
                </h1>
              </div>
              <p className="py-14  sm:py-5 md:py-16 lg:py-20 xl:py-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pretium est et rhoncus bibendum. Vivamus laoreet est id elit
                condimentum, id malesuada sapien placerat. Maecenas felis lacus,
                egestas vel eros sed, feugiat sodales sem. Lorem ipsum dolor sit
                amet, consectetur
              </p>

              <Link to="Shop" className="font-medium">
                <span>
                  {" "}
                  view Collection <AiOutlineArrowRight />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
