import { motion } from "framer-motion"
import styled from "styled-components"

const ScrollArrow = ({ motionVariants = null }) => {
  return <ScrollArrowStyled src="/common/scrollHorizontal.svg" />
}

export const ScrollArrowStyled = styled(motion.img)`
  opacity: 0.4;
`

export default ScrollArrow
