import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0%;
  } 50% {
    border-radius: 50%;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0%;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  transition: all 0.2s ease-in-out;
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  /* target styled-component */
  ${Emoji}:hover {
    font-size: 100px;
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
      <Emoji>✅</Emoji>
    </Wrapper>
  );
}

export default App;
