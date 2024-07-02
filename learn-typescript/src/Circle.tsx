import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string; // required
  borderColor?: string; // optional
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

function Circle({ bgColor, borderColor, text = "default" }: CircleProps) {
  // const [counter, setCounter] = useState(0);
  // setCounter("hello"); // error

  // custom default type = <data type 1 | data type 2 ... >
  const [value, setValue] = useState<number | string>(0);
  setValue(2); // ok
  setValue("hello"); // ok
  // setValue(true); // error
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
