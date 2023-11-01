import React from "react";
import img from "../../../images/zoltan-tasi-TsB03tz5030-unsplash.jpg";
import MultipleItems from "./Slider/Caro";
import "./caro.css";

const Carosal = () => {
  return (
    <div className="maincaro">
      <div className="lg:flex">
        <div className="md:w-3/5 pt-32 caromadia1">
          <MultipleItems />
        </div>
        <div className="md:w-2/5  caromadia">
          <div>
            <img src={img} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosal;
