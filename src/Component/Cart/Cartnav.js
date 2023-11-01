import React, { useContext } from "react";
import { Createcart } from "../../Context/Context";
import {
  NavBarContainer,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
  FLexanv,
  Cartlogo,
  NavlinkR,
  LOginLogo,
  Searchlogo,
} from "../Shop/NavbarElement";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Cartnav = ({ toggle }) => {
  const { cartItems } = useContext(Createcart);
  return (
    <>
      <div className=" py-0  sticky bg-white text-black z-10 md:relative">
        <FLexanv className="flex justify-between items-center py-10">
          <NavBarContainer className="flex justify-around items-center h-7 z-10">
            <NavLogo
              to="/"
              className="cursor-pointer pl-0 font-bold text-black"
            >
              Jakrio
            </NavLogo>
            <MoblieIcon onClick={toggle}>
              <AiOutlineMenu size={30} style={{ color: "#000" }} />
            </MoblieIcon>
            <NavMenu className="capitalize">
              <NavItem>
                <NavlinkR to="/" className="text-black">
                  Home{" "}
                </NavlinkR>
              </NavItem>
              <NavItem>
                <Cartlogo to="/Shop">Shop</Cartlogo>
              </NavItem>
              <NavItem>
                <NavLinks to="">Portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="">Blog</NavLinks>
              </NavItem>
              <NavItem>
                <Cartlogo to="" className="font-semibold">
                  Features
                </Cartlogo>
              </NavItem>
              <NavItem>
                <NavLinks style={{ color: "#00000" }} to="">
                  shortcodes
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
          <div className="flex  pr-0 ICons">
            <Searchlogo className="px-2">
              <BsSearch size={30} color="#000" />
            </Searchlogo>
            <Cartlogo to="/Cart" className="px-2 flex ">
              <AiOutlineShoppingCart size={30} color="#000" />
              <span className="text-black">({cartItems.length})</span>
            </Cartlogo>
            <LOginLogo className="px-0">
              <AiOutlineUser size={30} color="#000" />
            </LOginLogo>

            <span to="" className="px-2 flex text-[]">
              USD
            </span>
            <span to="" className="px-2 flex">
              ENG
            </span>
          </div>
        </FLexanv>
      </div>
    </>
  );
};

export default Cartnav;
