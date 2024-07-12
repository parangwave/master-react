import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { useEffect } from "react";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// variants = stage for animations
// 컴포넌트가 가질 수 있는 미리 정의된 시각적 state
// 1. help you clean code (mv setting to seperated js obj)
// 2. combine many animations
const boxVariants: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

export default function App() {
  // MotionValue !== ReactJS.state == no re-render, not trigger ReactJs Rendering Cycle
  const x = useMotionValue(0);
  // console.log(x); // only once

  // 1. useMotionValueEvent, onChange is deprecated
  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  // // 2. useEffect
  // useEffect(() => {
  //   x.on("change", () => console.log(x.get()));
  // });

  return (
    <Wrapper>
      {/* manually set MotionValue */}
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
