import React, { Suspense } from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding-bottom: 100px;
  justify-content: center;
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
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
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
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="/img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
