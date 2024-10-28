import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.color};
`;

// const Input = styled.input.attrs({ require: true })``;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   /* background: ${(props) => props.bgColor}; */
//   background: ${({ bgColor }) => bgColor};
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
// `;

const rotationAnimation = keyframes`
from {
  transform: rotate(0deg);
  border-radius: 0px;
} to {
transform: rotate(360deg);
border-radius: 100px;
}
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  &. ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello World</Title>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="#">
        Log out
      </Btn> */}
      {/* <Input required="true"></Input> */}
      <Box>
        <Emoji>😱</Emoji>
      </Box>
      <Emoji>😁</Emoji>
    </Container>
  );
};

export default App;
