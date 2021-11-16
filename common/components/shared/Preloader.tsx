import { device } from "@/common/utils"
import Div100vh from "react-div-100vh"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"

const Preloader = ({ threeImagesBools, setPreloaderBool, preloaderBool }) => {
  const ContainerVariants = {
    initial: {
      opacity: 0,
    },
    initialVisible: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  useEffect(() => {
    let allThreeLoaded = true
    if (threeImagesBools.length > 0) {
      threeImagesBools.map((item) => {
        if (item.loaded === false) {
          allThreeLoaded = false
        }
      })
    } else {
      allThreeLoaded = false
    }

    if (allThreeLoaded) {
      setTimeout(() => {
        setPreloaderBool(false)
      }, 500)
    }
  }, [threeImagesBools])

  return (
    // <AnimatePresence exitBeforeEnter>
    //   {preloaderBool && (
    <motion.div
      variants={ContainerVariants}
      initial="initialVisible"
      animate="animate"
      exit="exit"
    >
      <StyledPreloader>
        <motion.img
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="logo"
          src="/common/DeathSpace_Logo.svg"
          alt="Loading DeathSpace Design"
          data-testid="preloader"
        />
      </StyledPreloader>
    </motion.div>
    // )}
    /* </AnimatePresence> */
  )
}

const StyledPreloader = styled(Div100vh)`
  position: fixed;
  background: ${(props) => props.theme.bgColor};
  z-index: 999;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 70vw;
    @media ${device.tablet} {
      width: 50vw;
    }
    @media ${device.laptop} and (orientation: landscape) {
      width: 30vw;
    }
  }
`

export default Preloader
