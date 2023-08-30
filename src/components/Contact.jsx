import React from "react";
import { styled } from "styled-components";
import MapChart from "./MapChart";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  /* display: flex;
  align-items: center;
  justify-content: flex-end; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  height: 150px;
  outline: none;
`;

const Button = styled.button`
  background-color: #da4ea2;
  padding: 20px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Write your message" rows={10} />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
