import { device } from "@/common/utils"

import { useState } from "react"
import styled from "styled-components"
import Tooltip from "./Tooltip"
import { full_W_H } from "@/components/styled"

const Icon = (props) => {
  const [hovering, setHovering] = useState(false)
  const { icon, name } = props

  return (
    <IconWrap
    // onMouseOver={() => setHovering(true)}
    // onMouseOut={() => setHovering(false)}
    >
      <img src={icon} className="icon noselect" />
      <Tooltip
        tooltipText={name}
        // hovering={hovering}
      ></Tooltip>
    </IconWrap>
  )
}

const IconWrap = styled.div`
  width: 100%;
  height: 50px;
  position: relative;

  @media ${device.laptop} {
    height: 65px;
  }
  @media ${device.desktopL} {
    height: 70px;
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
    ${full_W_H}

    &:hover {
      opacity: 1;
    }
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`
export default Icon
