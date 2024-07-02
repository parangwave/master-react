import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  /* error */
  /* background-color: ${(props) => props.theme.bgColorr};  */
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <H1>Hello world</H1>
    </div>
  );
}

export default App;
