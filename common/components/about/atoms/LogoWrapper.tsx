import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ScrollArrow from "../../shared/ScrollArrow"
import { LogoContainer, LogoGrid, Logo_ImgWrap } from "../styles/About.style"

interface LogoWrapperProps {
  animDelay: number
}

const LogoWrapper = ({ animDelay }: LogoWrapperProps) => {
  const slicedLettersNos = Array.from({ length: 10 }, (_, i) => i + 1)

  const imgWrap = useRef(null)
  const [imgWrapDimensions, setImgWrapDimensions] = useState(null)
  useEffect(() => {
    checkDimensions()

    window.addEventListener("resize", checkDimensions)
    return () => {
      window.removeEventListener("resize", checkDimensions)
    }
  }, [])

  useEffect(() => {
    checkDimensions()
  }, [imgWrap])

  const checkDimensions = () => {
    setImgWrapDimensions({
      x: imgWrap.current?.offsetWidth,
      y: imgWrap.current?.offsetHeight,
    })
  }
  const calcLogoHeight = (width) => {
    const ratio = 5.411
    const tempVal = width / ratio
    if (tempVal != null || NaN || undefined) return tempVal
    else return 0
  }

  const lettersWrapVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: animDelay - 0.05,
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
    },
  }
  const singleLetterVars = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        // duration: 0.5,
        // ease: "easeOut",
        type: "spring",
        stiffness: 500,
        damping: 120,
        // stiffness: 50,
        // damping: 15,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const slicedLetters = slicedLettersNos.map((item, idx) => {
    return (
      <motion.img
        key={idx}
        src={`/about/sliced_logo/${item}.svg`}
        variants={singleLetterVars}
        alt=""
      />
    )
  })

  return (
    <div>
      <LogoGrid>
        <LogoContainer>
          <Logo_ImgWrap ref={imgWrap}>
            {/* <img src="/common/DeathSpace_Logo.svg"></img> */}
            <motion.div
              variants={lettersWrapVars}
              initial="initial"
              animate="animate"
              className="letters_wrap"
              style={{
                height: calcLogoHeight(imgWrapDimensions?.x)
                  ? calcLogoHeight(imgWrapDimensions?.x)
                  : 0,
              }}
            >
              {slicedLetters}
            </motion.div>
          </Logo_ImgWrap>
        </LogoContainer>
        <ScrollArrow></ScrollArrow>
      </LogoGrid>
    </div>
  )
}

export default LogoWrapper
