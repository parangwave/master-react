import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
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

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  /* target other element (unless styled-components) */
  span {
    font-size: 30px;
    transition: all 0.2s ease-in-out;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;
