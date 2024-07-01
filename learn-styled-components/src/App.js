import styled from "styled-components";

const Parent = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.h1`
  color: white;
`;

function App() {
  return (
    <Parent>
      {/* <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div> */}
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      {/* <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div> */}
      <BoxTwo />
    </Parent>
  );
}

export default App;
