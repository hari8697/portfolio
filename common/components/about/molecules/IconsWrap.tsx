import Icon from "../atoms/Icon"
import styled from "styled-components"
import { device, devicePX } from "@/common/utils"
import { about_grid_col, default_grid_col } from "./About.style"
import { motion } from "framer-motion"
import { useWindowSize } from "@/common/utils/"
import { useEffect } from "react"

const IconsWrap = (props) => {
  const { constraintsRef } = props
  const { width: vW, height: vH } = useWindowSize()
  let x
  const iconsArr = Array.from({ length: 14 }, (_, i) => i + 1)

  const icons = iconsArr.map((item) => {
    return <Icon icon={`/about/tech_icons/${item}.svg`} />
  })

  useEffect(() => {
    const resizeListen = document.addEventListener("resize", onResize)
    return () => {}
  }, [])

  const onResize = () => {
    x = 0
  }

  return (
    <IconsWrapper
      style={{ x }}
      drag={vW < devicePX.tablet && "x"}
      dragConstraints={constraintsRef}
    >
      {icons}
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 8px;
  margin-top: 2rem;
  padding: inherit;
  margin-left: -8px;

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
    margin: 0 -12px;

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
