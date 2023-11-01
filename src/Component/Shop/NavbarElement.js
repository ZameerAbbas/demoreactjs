import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { Link as Linklogo } from "react-router-dom";

export const Nav = styled.nav`
  padding: 0px 15px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #030200;
  color: #ffff;

  @media screen and (max-width: 1248px) {
  }
  @media (max-width: 1080px) {
    position: relative;
  }
  @media (max-width: 772px) {
    position: relative;
  }
`;
export const FLexanv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media (max-width: 992px) {
    .ICons {
      display: none;
    }
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7vh;
  z-index: 1;
  @media screen and (max-width: 1248px) {
    // align-items:center;
    // flex-direction:column;
  }
  @media (max-width: 772px) {
    justify-content: flex-start;
  }
`;
export const NavLogo = styled(Linklogo)`
  cursor: pointer;
  ${'' /* padding-left: 70px; */}
  text-decoration: none;
  color:#000;
  font-weight:900;
  font-size:2rem;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

export const Cartlogo = styled(LinkR)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LinkPage = styled(LinkR)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LogoImg = styled.img`
  width: 80px;
  @media screen and (max-width: 1248px) {
  }
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

export const MoblieIcon = styled.div`
  display: none;

  @media screen and (max-width: 772px) {
    display: block;
    position: absolute;
    top: 0;
    right: 28px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
  @media (max-width: 432px) {
    font-size: 2rem;
    right: 20px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  border-radius: 7px;
  height: 5vh;

  @media screen and (max-width: 1394px) {
  }
  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 772px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  // height:80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  font-size: 18px;
  font-family:"Red Hat Display"
  text-transform: uppercase;
  font-weight: 400;
  &.active {
    color: #25fcf4;
    background-color: #469d9a;
    height: 6vh;
    border-radius: 15px;
  }
  &:focus {
    background-color: #469d9a;
    height: 6vh;
    border-radius: 15px;
  }

  @media screen and (max-width: 1438px) {
    padding: 0 1.8rem;
  }
  @media screen and (max-width: 1366px) {
    padding: 0 1.4rem;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 1156px) {
    padding: 0 1rem;
  }
`;

export const NavlinkR = styled(LinkR)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  font-size: 18px;
  font-family:"Red Hat Display"
  text-transform: uppercase;
  font-weight: 400;

  @media screen and (max-width: 1438px) {
    padding: 0 1.8rem;
  }
  @media screen and (max-width: 1366px) {
    padding: 0 1.4rem;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 1156px) {
    padding: 0 1rem;
  }


`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const Searchlogo = styled(LinkR)``
export const LOginLogo = styled(LinkR)``