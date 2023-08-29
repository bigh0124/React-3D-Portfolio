import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

const Item = styled.li`
  cursor: pointer;
  color: white;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Search = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #da4ea2;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Logo src="/img/logo.png" />
          <List>
            <Item>Home</Item>
            <Item>Studio</Item>
            <Item>Works</Item>
            <Item>Contact</Item>
          </List>
        </Left>
        <Right>
          <Search src="/img/search.png" />
          <Button>Hire Now</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Navbar;
