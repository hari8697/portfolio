import styled from "styled-components"
import { motion } from "framer-motion"

const Box = styled(motion.div)`
  min-width: 100px;
  min-height: 100px;
  background: blue;
`

export default function Home() {
  return (
    <motion.div>
      <Box layoutId="box"></Box>
    </motion.div>
  )
}
