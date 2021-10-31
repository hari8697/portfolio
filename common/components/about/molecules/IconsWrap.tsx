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
  const animation_duration = 30
  const { constraintsRef } = props
  const { width: vW, height: vH } = useWindowSize()
  let x
  const iconsArr = Array.from({ length: 14 }, (_, i) => i + 1)

  const icons = iconsArr.map((item, index) => {
    return <Icon key={index} icon={`/about/tech_icons/${index + 1}.svg`} />
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
    <>
      <IconsWrapper
        style={{ x }}
        drag={vW < devicePX.tablet && "x"}
        dragConstraints={constraintsRef}
      >
        <IconsSet initial="initial" animate={controls}>
          {icons}
        </IconsSet>
        <IconsSet animate={controls2}>{icons}</IconsSet>
      </IconsWrapper>
    </>
  )
}
const IconsSet = styled(motion.div)`
  ${full_W_H}
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -8px;
`
const IconsWrapper = styled(motion.div)`
  ${about_grid_col}
  grid-column: initial;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 150vw;
  height: 50px;
  grid-gap: 8px;
  margin-top: 2rem;
  padding: inherit;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  overflow-x: hidden;

  @media ${device.mobileL} {
    min-width: 120vw;
  }
  .icon_wrap {
    width: 100%;
    min-width: 50px;
    height: 100%;
    position: relative;
  }

  @media ${device.tablet} {
    padding: 0;
    min-width: initial;
    position: relative;

    grid-gap: 1%;
    margin: 2rem 0;

    .icon_wrap {
      min-width: initial;
    }
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
  .icon {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.25s ease-out;

    &:hover {
      opacity: 1;
    }
  }
`

export default IconsWrap
