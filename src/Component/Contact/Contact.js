import React from "react";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import "./contact.css";
const Contact = () => {
  return (
    <div className="bg-[#2b2b2b] text-whhite  pt-20">
      <div className="flex justify-around flex-col md:justify-between md:items-center  ">
        <div className="text-center py-9">
          <h1 className="uppercase text-5xl font-semibold text-white">
            jarkiro
          </h1>
        </div>
        <div className=" mb-4 md:flex md:flex-row md:text-white smalldisplay">
          <ul className="flex flex-row text-white md:flex-nowrap ">
            <li className="border-r-2 border-Slate-50  px-3">site map</li>
            <li className="border-r-2 border-Slate-50 px-3 ">Search</li>
            <li className="border-r-2 border-Slate-50  px-3">Trems</li>
            <li className="border-r-2 border-Slate-50  px-3">Career</li>
            <li className="border-r-2 border-Slate-50  px-3">
              Order and Returns
            </li>
            <li className="border-r-2 border-Slate-50  px-3">About</li>
            <li className="px-3">Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-around md:justify-start py-10 smallscreen ">
            <div className=" px-3">
              <a herf="" className="text-white hover:text-Salte-500 " href>
                <CiFacebook size={30} />
              </a>
            </div>
            <div className=" px-3">
              <a herf className="text-white hover:text-Salte-500" href>
                {" "}
                <CiInstagram size={30} />
              </a>
            </div>
            <div className="px-3">
              <a herf="" className="text-white hover:text-Salte-500" href>
                <CiLinkedin size={30} />
              </a>
            </div>
            <div className=" px-3">
              <a herf="" className="text-white hover:text-Salte-500" href>
                {" "}
                <TbBrandTelegram size={30} />
              </a>
            </div>
            <div className="px-3">
              <a herf="" className="text-white hover:text-Salte-500" href>
                <CiTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center bg-[#252525] text-white">
        Copyright &#169; 2015 by{" "}
        <spna className="font-medium py-3 px-1 uppercase">jarkiro</spna> . All
        Right Reserved.
      </div>
    </div>
  );
};

export default Contact;
