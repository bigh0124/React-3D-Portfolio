import React, { Suspense } from "react";
import { styled } from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
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
