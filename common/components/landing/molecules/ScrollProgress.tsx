import { useWindowSize } from "@/common/utils"
import { motion, useTransform } from "framer-motion"
import ScrollArrow from "../../shared/ScrollArrow"

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,

    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
}
const ScrollProgress = ({ animatedX, maxDragX, isExiting }) => {
  const { width: vW, height: vH } = useWindowSize()
  const scrollBarWidth = useTransform(
    animatedX,
    [0, -maxDragX],
    [vW * 0.04, vW * 0.2]
  )
  return (
    <div>
      {vW > 1023 && vW / vH > 1 && (
        <>
          <motion.div
            className="noselect scroll_wrapper"
            variants={ContainerVariants}
            initial="initial"
            animate={isExiting ? "exit" : "animate"}
          >
            <div className="scroll_arrow">
              {/* <img src="/common/scrollHorizontal.svg"></img> */}
              <ScrollArrow></ScrollArrow>
            </div>
            <div className="scrollProgressBar">
              <motion.span
                style={{ width: scrollBarWidth }}
                className="fg"
              ></motion.span>
              <span className="bg"></span>
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default ScrollProgress
