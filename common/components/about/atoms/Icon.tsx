import { device } from "@/common/utils"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"
import Tooltip from "./Tooltip"

const Icon = (props) => {
  const [hovering, setHovering] = useState(false)
  const { icon, name } = props

  return (
    <IconWrap
    // onMouseOver={() => setHovering(true)}
    // onMouseOut={() => setHovering(false)}
    >
      <Image src={icon} className="icon noselect" layout="fill" />
      <Tooltip
        tooltipText={name}
        // hovering={hovering}
      ></Tooltip>
    </IconWrap>
  )
}

const IconWrap = styled.div`
  width: 100%;
  min-width: 50px;
  min-height: 50px;
  position: relative;

  @media ${device.tablet} {
    min-width: initial;
  }

  &:hover,
  &:focus {
    .tooltip_class {
      opacity: 1;
    }
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
export default Icon
