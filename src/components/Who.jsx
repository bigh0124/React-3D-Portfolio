import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  flex: 1;
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
  width: 140px;
`;

const Left = styled.div`
  flex: 1;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>1</Left>
        <Right>
          <Title>Think Outside the square space</Title>
          <WhatWeDo>
            <Line src="/img/line.png" />
            <Text>What We Do</Text>
          </WhatWeDo>
          <Desc>a creative group of designers and developers with a passion for the arts</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
