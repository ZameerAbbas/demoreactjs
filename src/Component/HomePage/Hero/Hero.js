import React from "react";
import {
  Container,
  Content,
  Card,
  DivSearch,
  SearchBtn,
} from "./HeroElements";

const Hero = () => {
 
  return (
    <Container id="Hero" className="">
      <Content className="flex justify-center items-center herotext lg:flex-row xl:flex-row ">
        <Card className="">
        
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
            Hipster Fashon
            <br></br>
            Trend 2015
            </h1>
         

          <DivSearch className="flex justify-center align-center">
            <SearchBtn className="herobtn bottom-1 border-white font-semibold"> Search</SearchBtn>
          </DivSearch>
        </Card>
      </Content>

      <div className=""></div>
    </Container>
  );
};

export default Hero;
