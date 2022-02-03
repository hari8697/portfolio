import { NextLinkStyled } from "../styles/App.styled"
import SectionTitle from "./SectionTitle"
import { H3 } from "../../styled/Text"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useResponsiveHelper } from "@/common/utils/"

interface Props {
  next: {
    title: string
    id: string
  }
}

const NextLink = ({ next, isExiting, setIsExiting }) => {
  const router = useRouter()
  const [isHover, setIsHover] = useState(false)

  const { isMobile, isTablet, isNotLaptop } = useResponsiveHelper()
  const [mobileVersion, setMobileVersion] = useState(true)
  useEffect(() => {
    if (isMobile || isTablet || isNotLaptop) {
      setMobileVersion(true)
    } else {
      setMobileVersion(false)
    }
  }, [isMobile, isTablet, isNotLaptop])

  const arrowVariants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 5,
      opacity: 1,
    },
  }
  if (next != null || undefined) {
    return (
      <NextLinkStyled className="next">
        <SectionTitle>Next</SectionTitle>
        <motion.div
          onHoverStart={() => {
            setIsHover(true)
          }}
          onHoverEnd={() => setIsHover(false)}
          className="title_wrap"
          onClick={(e) => {
            e.preventDefault()
            const goToUrl = `/work/${next.fields.id}`
            if (!isExiting) {
              router.push(goToUrl)
              setIsExiting(true)
            }
          }}
        >
          <H3>{next.fields.title}</H3>
          <motion.img
            variants={arrowVariants}
            initial={mobileVersion ? "animate" : "initial"}
            animate={
              !mobileVersion ? (isHover ? "animate" : "initial") : "animate"
            }
            transition={{
              duration: 0.25,
              // ease: [0.6, 0.01, -0.05, 0.9],
              ease: "easeOut",
            }}
            src="/work/icons/next_arrow.svg"
            alt=""
          />
        </motion.div>
      </NextLinkStyled>
    )
  } else return <NextLinkStyled className="next"></NextLinkStyled>
}

export default NextLink
