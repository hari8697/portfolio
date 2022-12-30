import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

import { CloseBtnStyled, HeaderStyled } from "../styles/App.styled"
import { motion, AnimatePresence } from "framer-motion"
import { HeroImageMobile, HeroImageDesktop } from "../atoms"
import Link from "next/link"
import { H1 } from "@/components/styled/index"
import ScrollArrow from "../../shared/ScrollArrow"

export const HeaderDesktop = ({
  pageTransitionComplete,
  isExiting,
  setIsExiting,
  setPageTransitionComplete,
  heroImage,
  title,
}) => {
  const heroImageAnimDelay = 0.25
  const CloseBtnVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: heroImageAnimDelay + 0.5,
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const titleVariants = {
    immediateHide: {
      opacity: 0,
      transition: {
        duration: 0,
        ease: "linear",
      },
    },
    initial: {
      x: "0%",
      opacity: 1,
    },
    animate: {
      x: "5%",
      opacity: 1,
      transition: {
        delay: heroImageAnimDelay,
        // duration: 0.35,
        type: "spring",
        stiffness: 70,
        damping: 20,

        // duration: 1,
        // bounce: 0.1,
      },
    },
  }

  return (
    <HeaderStyled className="nosel">
      <div className="content_wrap">
        <motion.div
          variants={CloseBtnVars}
          initial="initial"
          animate={"animate"}
        >
          <Link href="/">
            <CloseBtnStyled>
              <img
                className="close_btn desktop"
                src="/about/close_btn.svg"
                alt=""
                onClick={() => {
                  setIsExiting(true)
                }}
              />
            </CloseBtnStyled>
          </Link>
        </motion.div>

        <HeroImageDesktop
          isExiting={isExiting}
          setPageTransitionComplete={setPageTransitionComplete}
          heroImage={heroImage}
          heroImageAnimDelay={heroImageAnimDelay}
        />

        <motion.div
          variants={titleVariants}
          initial="initial"
          animate={"animate"}
          className="title_wrap"
        >
          <H1 className="title">{title}</H1>
        </motion.div>
        <ScrollArrow></ScrollArrow>
      </div>
    </HeaderStyled>
  )
}
