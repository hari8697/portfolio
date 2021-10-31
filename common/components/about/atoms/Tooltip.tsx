import styled from "styled-components"
import { text_size_template } from "@/components/styled"

const TooltipComp = styled.div`
  position: absolute;
  left: 50%;
  top: 120%;

  transform: translateX(-50%);

  padding: ${(props) => (props.large ? "1rem 2rem" : "0.75rem 1.5rem")};
  background: #18151c;
  border-radius: 0.75rem;

  pointer-events: none;
  transition: all 0.3s;
  /* opacity: ${(props) => (props.hovering == true ? 1 : 0)}; */
  opacity: 0;

  ${text_size_template({
    mobile: "helperText",
    laptop: "paragraph",
    desktop: "paragraph",
  })}

  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid #18151c;

    bottom: 100%;
    border-color: transparent transparent #18151c transparent;
  }
`

const Tooltip = (props) => {
  const { tooltipText, hovering } = props
  return (
    <TooltipComp hovering={hovering} className="tooltip_class">
      {tooltipText}
      <span className="arrow"></span>
    </TooltipComp>
  )
}

export default Tooltip
