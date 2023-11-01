import React from "react";
import "./show.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Single from "./Slider/Slider";
import img from "../../../images/vinicius-amnx-amano-OnsaUYoFMtA-unsplash.jpg";
const Shoesshow = () => {
  return (
    <div className="relative">
      <div class="flex  shoemain">
        <div class="w-3/5 showesone  ">
          <img src={img} alt="" className="img" />
        </div>
        <div class="w-2/5  shoestwo ">
          <div className="xl:p-28   md:p-16 lg:-24  ">
            <Single />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoesshow;
