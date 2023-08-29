import React from "react";
import { styled } from "styled-components";

const lists = ["Web Design", "Development", "Illustration", "Product Design", "Social Media"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1400px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  cursor: pointer;
  font-style: italic;
  &::after {
    content: "${(props) => props.text}";
    font-style: italic;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    color: transparent;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
          color: pink;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {lists.map((list) => {
              return (
                <ListItem key={list} text={list}>
                  {list}
                </ListItem>
              );
            })}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Works;
