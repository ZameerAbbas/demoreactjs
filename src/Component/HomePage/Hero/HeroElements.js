import styled from "styled-components";
import banner from "../../../images/vinicius-amnx-amano-OnsaUYoFMtA-unsplash.jpg";

export const Container = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:50% 50%;
  color: #fff;
  height: 90vh;
  @media (max-width: 1024px) {
    height: 50vh;
    .herotext{
      ${'' /* border:1px solid red; */}
      height: 40vh;
      padding: 40px 80px;
      
    }
  }
  @media (max-width: 772px) {
    height: 40vh;
    
  }
`;
export const Content = styled.div`
  padding: 0px 0px 60px 400px;
  display: flex;
  ${
    "" /* justify-content: center;
  align-items: center; */
  }

  height: 80vh;

  @media (max-width: 1024pxpx) {
    padding: 40px 60px;
  }
  @media (max-width: 772px) {
    padding: 40px 80px;
  }
  @media (max-width: 656px) {
    padding: 40px 60px;
  }
  @media (max-width: 512px) {
    padding: 40px 30px;
  }
`;

export const Card = styled.div`
  width: 100%;
`;
export const DivSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const Inputsear = styled.input`
  font-size: 16px;
  outline: none;
  border: none;
  width: 100%;
`;
export const SearchBtn = styled.button`
  padding: 20px 40px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
  }
`;

export const SilderContainer = styled.div`
  width: 70%;
`;
