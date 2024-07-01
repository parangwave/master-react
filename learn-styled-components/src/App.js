import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: tomato;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  h1 {
    color: tomato;

    &:hover {
      color: cornflowerblue;
    }
  }

  ${Title}:hover {
    color: blue;
  }
`;

const anime = keyframes`
  from {
    color: tomato;
  }
  to {
    color: lime;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  background-color: orange;
  padding: 50px;
  animation: ${anime} 0.7s infinite;
`;

const Input = styled.input.attrs({ required: true })`
  height: 50px;
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="tomato" />
      <Circle bgColor="teal" />
      <Btn as="a" href="#">
        Login
      </Btn>
      <Input />
      <h1>hello world</h1>
      <Title>hi world</Title>
    </Wrapper>
  );
}

export default App;
