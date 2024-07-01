import styled from "styled-components";

const Parent = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

// send html tag attributes
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Parent as="header">
      <Btn>Login</Btn>
      {/* change tag name */}
      <Btn as="a" href="#">
        Login
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Parent>
  );
}

export default App;
