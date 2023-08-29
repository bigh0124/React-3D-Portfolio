import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 80px;
  padding-bottom: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
`;

const Line = styled.img`
  width: 20px;
  height: 5px;
`;

const Text = styled.h4`
  color: #da4ea2;
  font-size: 24px;
  font-weight: bold;
`;

const Desc = styled.p`
  color: lightgray;
  margin-bottom: 20px;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  width: 120px;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeroImg = styled.img`
  object-fit: cover;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="/img/line.png" />
            <Text>What We Do</Text>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <HeroImg src="/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
