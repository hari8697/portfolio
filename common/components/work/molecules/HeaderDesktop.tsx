import { useResponsiveHelper } from "@/common/utils/"
import { useEffect, useState } from "react"

import { CloseBtnStyled, HeaderStyled } from "../styles/App.styled"
import { motion } from "framer-motion"
import { HeroImageMobile, HeroImageDesktop } from "../atoms"
import Link from "next/link"
import { H1 } from "@/components/styled/index"

export const HeaderDesktop = ({
  mobileVersion,
  pageTransitionComplete,
  setIsExiting,
  setPageTransitionComplete,
  heroImage,
  title,
}) => {
  const ContentWrapVariantsDesktop = {
    initial: {
      // height: "100vh",
    },
    animate: {},
    exit: {},
  }

  const heroImageAnimDelay = 0.25

  const titleVariants = {
    immediateHide: {
      opacity: 0,
      transition: {
        duration: 0,
        ease: "linear",
      },
    },
    initial: {
      x: "2%",
      opacity: 0,
    },
    animate: {
      x: "5%",
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  }

  return (
    <HeaderStyled className="nosel" variants={ContentWrapVariantsDesktop}>
      <div className="content_wrap">
        <motion.div initial="initial" animate={"animate"}>
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
      </div>
    </HeaderStyled>
  )
}
