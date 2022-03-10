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
  ContentVariants,
  title,
}) => {
  const ContentWrapVariantsDesktop = {
    initial: {
      // height: "100vh",
    },
    animate: {},
    exit: {},
  }

  return (
    <HeaderStyled className="nosel" variants={ContentWrapVariantsDesktop}>
      <div className="content_wrap">
        {!mobileVersion && (
          <motion.div
            initial="initial"
            animate={
              pageTransitionComplete ? "animationComplete" : "immediateHide"
            }
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
        )}

        {mobileVersion ? (
          <HeroImageMobile
            setPageTransitionComplete={setPageTransitionComplete}
            heroImage={heroImage}
          />
        ) : (
          <HeroImageDesktop
            setPageTransitionComplete={setPageTransitionComplete}
            heroImage={heroImage}
          />
        )}

        <motion.div
          variants={ContentVariants}
          initial="initial"
          animate={
            pageTransitionComplete ? "animationComplete" : "immediateHide"
          }
          className="title_wrap"
        >
          <H1 className="title">{title}</H1>
          {mobileVersion && (
            <Link href="/">
              <CloseBtnStyled>
                <img
                  className="close_btn mobile"
                  src="/about/close_btn.svg"
                  alt=""
                  onClick={() => {
                    setIsExiting(true)
                  }}
                />
              </CloseBtnStyled>
            </Link>
          )}
        </motion.div>
      </div>
    </HeaderStyled>
  )
}
