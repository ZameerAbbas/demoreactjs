import React, { useState } from "react";
import Contact from "../Contact/Contact";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import Carosal from "./Carosal/Carosal";
import Shoesshow from "./Shoesshow/Shoesshow";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Carosal />
      <Shoesshow />
      <Contact />
    </>
  );
};

export default HomePage;
