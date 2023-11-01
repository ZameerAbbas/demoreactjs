import React, { useContext } from "react";
import {
  SidebarContainer,
  SideHeader,
  NavLogo,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  Searchlogo,
  Cartlogo,
  LOginLogo,
} from "./SidebarElements";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Createcart } from "../../../Context/Context";
import { BsSearch } from "react-icons/bs";

const Sidebar = ({ isOpen, toggle }) => {
  const { cartItems } = useContext(Createcart);
  return (
    <SidebarContainer isOpen={isOpen} className="bg-[#030200]">
      <SideHeader>
        <NavLogo to="/">Jakrio</NavLogo>
        <Icon>
          <CloseIcon
            onClick={toggle}
            style={{ color: "#fff", background: "#0000" }}
          />
        </Icon>
      </SideHeader>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Hero" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="Shop" onClick={toggle}>
            Shop
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            Product
          </SidebarLink>

          <SidebarLink to="" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            Features
          </SidebarLink>
          <SidebarLink to="" onClick={toggle}>
            shortcodes
          </SidebarLink>
          <div className="flex   pr-10 ICons">
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

            <span to="" className="px-2 flex text-[#fff]">
              USD <RiArrowDropDownLine size={15} color="#fff" />
            </span>
            <span to="" className="px-2 flex">
              ENG <RiArrowDropDownLine size={15} color="#fff" />
            </span>
          </div>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
