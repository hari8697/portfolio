import { useWindowSize } from "@/common/utils"
import { motion, useTransform } from "framer-motion"
import Image from "next/image"

const ScrollProgress = ({ animatedX, maxDragX }) => {
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
          <div className="noselect scroll_wrapper">
            <div className="scroll_arrow">
              <Image
                src="/landing/scrollHorizontal.svg"
                width={31}
                height={22}
              ></Image>
            </div>
            <div className="scrollProgressBar">
              <motion.span
                style={{ width: scrollBarWidth }}
                className="fg"
              ></motion.span>
              <span className="bg"></span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ScrollProgress
