import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 30px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Right = styled.div``;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Contact us</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Write your message" rows={10} />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>1</Right>
      </Container>
    </Section>
  );
};

export default Contact;
