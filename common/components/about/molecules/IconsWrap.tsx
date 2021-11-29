import Icon from "../atoms/Icon"
import styled from "styled-components"
import { device, devicePX } from "@/common/utils"
import { about_grid_col, default_grid_col } from "./About.style"
import { motion, useAnimation } from "framer-motion"
import { useWindowSize } from "@/common/utils/"
import { useEffect } from "react"
import { full_W_H } from "@/components/styled"

const IconsWrap = (props) => {
  const controls = useAnimation()
  const controls2 = useAnimation()
  const animation_duration = 40
  const { constraintsRef } = props
  const { width: vW, height: vH } = useWindowSize()
  let x
  // const iconsArr = Array.from({ length: 14 }, (_, i) => i + 1)
  const iconsArr = [
    "Javascript",
    "HTML",
    "CSS",
    "Node.js",
    "GitHub",
    "React",
    "Vue",
    "GitLab",
    "Docker",
    "Figma",
    "Sass/Scss",
    "NPM",
    "Unity",
    "Sourcetree",
  ]

  const icons = iconsArr.map((item, index) => {
    return (
      <Icon
        key={index}
        icon={`/about/tech_icons/${index + 1}.svg`}
        name={item}
      />
    )
  })

  useEffect(() => {
    const resizeListen = document.addEventListener("resize", onResize)

    sequence()

    return () => {
      document.removeEventListener("resize", onResize)
      controls.stop()
    }
  }, [])

  const sequence = async () => {
    sequence2()
    await controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: animation_duration / 2,
        ease: "linear",
      },
    })
    return await controls.start({
      x: ["100%", "-100%"],
      transition: {
        duration: animation_duration,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }

  const sequence2 = async () => {
    controls2.start({
      x: ["0%", "-200%"],
      transition: {
        duration: animation_duration,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }

  const onResize = () => {
    x = 0
  }
  return (
    <IconsWrapper
    // style={{ x }}
    // drag={vW < devicePX.tablet && "x"}
    // dragConstraints={constraintsRef}
    >
      <IconsSet iconsArr={iconsArr} initial="initial" animate={controls}>
        {icons}
      </IconsSet>
      <IconsSet iconsArr={iconsArr} animate={controls2}>
        {icons}
      </IconsSet>
    </IconsWrapper>
  )
}
const IconsWrapper = styled(motion.div)`
  ${about_grid_col}
  grid-column: initial;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 150vw;

  margin-top: 2rem;
  padding: inherit;
  /* padding-bottom: 2rem; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  overflow-x: hidden;

  @media ${device.mobileL} {
    min-width: 120vw;
  }

  @media ${device.tablet} {
    padding: 0;
    min-width: initial;
    position: relative;

    margin-top: 2rem;
  }
`

const IconsSet = styled(motion.div)`
  ${full_W_H}
  min-width: ${(props) => props.iconsArr.length * 62}px;
  grid-gap: 0.75rem;
  
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* margin: 0 8px; */
  padding-bottom: 60px;
  padding-right: 12px;

  @media ${device.laptop} {
    min-width: 100%;
  }

  /* padding: 2rem 0; */
`
export default IconsWrap
