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
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {/* ?? (default value when undefined) */}
      {text}
    </Container>
  );
}

export default Circle;
