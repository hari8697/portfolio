import { ParaLarge } from "../../styled"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const opacityMax = 0.7
const defaultVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, opacityMax],
    transition: {
      delay: 2,
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}
const ScrollText = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const htmlDom = document?.querySelector("html")
      // console.log(htmlDom?.scrollTop)
      if (htmlDom?.scrollTop > 20) {
        setHasScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <ScrollTextStyled
      variants={defaultVars}
      initial="initial"
      animate={!hasScrolled ? "animate" : "exit"}
    >
      <ParaLarge>Scroll for more</ParaLarge>
    </ScrollTextStyled>
  )
}
const ScrollTextStyled = styled(motion.div)``

export default ScrollText
