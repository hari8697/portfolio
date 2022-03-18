import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styled from "styled-components"

const moveByVal = 15
const defaultVars = {
  initial: {
    opacity: 0,
    y: -moveByVal,
  },
  animate: {
    opacity: [0, 0.4, 0.4, 0],
    y: [-moveByVal, 0, 0, moveByVal],

    transition: {
      // type: "spring",
      // stiffness: 100,
      // damping: 60,
      // mass: 1,
      // duration: 2,
      // bounciness: 0.3,
      delay: 2,
      // type: "spring",
      // stiffness: 10,
      // damping: 1000,
      duration: 3,
      ease: "easeInOut",
      // repeatType: "reverse",
      repeatDelay: 3,
      repeat: Infinity,
      times: [0, 0.2, 0.8, 1],
    },
  },
  exit: {
    opacity: 0,
    y: moveByVal,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

const ScrollArrow = ({ motionVariants = defaultVars }) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const htmlDom = document?.querySelector("html")
      console.log(htmlDom?.scrollTop)
      if (htmlDom?.scrollTop > 20) {
        setHasScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ScrollArrowStyled
      className="noselect nodrag"
      draggable="false"
      variants={motionVariants}
      initial="initial"
      animate={!hasScrolled ? "animate" : "exit"}
      src="/common/scrollHorizontal.svg"
    />
  )
}

export const ScrollArrowStyled = styled(motion.img)`
  opacity: 0;
  width: 2.5vw;
  min-width: 33px;
  max-width: 40px;
`

export default ScrollArrow
