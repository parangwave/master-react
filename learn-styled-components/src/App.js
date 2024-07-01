import styled from "styled-components";

const Parent = styled.div`
  display: flex;
`;

// adapting props
const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

// extending comp using styled()
const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Parent>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Parent>
  );
}

export default App;
