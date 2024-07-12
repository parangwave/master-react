import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(228, 0, 153), rgb(221, 0, 238));
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
  // useTransform(MotionValue, input, output)
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  // useScroll() === useViewportScroll()
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useEffect(() => {
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  });

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
