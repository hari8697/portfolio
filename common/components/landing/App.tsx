import styled, { ThemeProvider } from "styled-components";
import Landing from "@/components/landing/Landing";
import { defaultTheme, darkTheme } from "@/utils/index";
import { motion } from "framer-motion";

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function App() {
  return (
    <Container
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Landing></Landing>
    </Container>
  );
}

const Container = styled(motion.div)`
  height: 100%;
`;

export default App;
