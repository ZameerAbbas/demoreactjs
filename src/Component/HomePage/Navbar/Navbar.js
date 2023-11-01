import React, { useContext } from "react";

import {
  Nav,
  NavBarContainer,
  MoblieIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
  FLexanv,
  Cartlogo,
  LOginLogo,
  Searchlogo,
  LinkPage,
} from "./NavbarElement";
import { Createcart } from "../../../Context/Context";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ toggle }) => {
  const { cartItems } = useContext(Createcart);
  console.log("toggleo prop in navj;kbar:", toggle);
  return (
    <>
      <Nav className="Nav text-white  bg-[#030200] ">
        <FLexanv>
          <NavBarContainer>
            <NavLogo to="/">Jakrio</NavLogo>
            <MoblieIcon onClick={toggle}>
              <AiOutlineMenu size={30} />
            </MoblieIcon>

            <NavMenu className="capitalize">
              <NavItem className="pl-5 ">
                <NavLinks to="" className="font-semibold ">
                  Home{" "}
                </NavLinks>
              </NavItem>
              <NavItem>
                <LinkPage to="Shop"  className="capitalize">
                  Shop
                </LinkPage>
              </NavItem>
              <NavItem>
                <NavLinks to="" >
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="" >
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <Cartlogo to="/Cart" className="capitalize" >
                  Features
                </Cartlogo>
              </NavItem>
              <NavItem>
                <NavLinks style={{ color: "#00000" }} to="" smooth={300}>
                  shortcodes
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
          <div className="flex  pr-10 ICons">
            <Searchlogo className="px-2">
              <BsSearch size={30} color="#fff" />
            </Searchlogo>
            <Cartlogo to="/Cart" className="px-2 flex ">
              <AiOutlineShoppingCart size={30} color="#fff" />
              <span className="text-white">({cartItems.length})</span>
            </Cartlogo>

            <LOginLogo className="px-2">
              <AiOutlineUser size={30} color="#fff" />
            </LOginLogo>

            <span to="" className="px-2 flex text-[]">
              USD <RiArrowDropDownLine size={15} color="#fff" />
            </span>
            <span to="" className="px-2 flex">
              ENG <RiArrowDropDownLine size={15} color="#fff" />
            </span>
          </div>
        </FLexanv>
      </Nav>
    </>
  );
};

export default Navbar;
