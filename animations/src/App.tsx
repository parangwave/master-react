import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// variants = stage for animations
// 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
// 1. help you clean code (mv setting to seperated js obj)
const myVariants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
};

export default function App() {
  return (
    <Wrapper>
      {/* initial="prop1", animate="prop2" */}
      {/* prop1, prop2 must be in variants obj */}
      <Box variants={myVariants} initial="start" animate="end" />
    </Wrapper>
  );
}
