import { device } from "@/common/utils"
import Div100vh from "react-div-100vh"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"

const Preloader = ({
  threeImagesBools,
  setPreloaderBool,
  loadImagesArr,
  setLoadImagesArr,
}) => {
  const ContainerVariants = {
    initial: {
      opacity: 0,
    },
    initialVisible: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  const [allThreeLoaded, setAllThreeLoaded] = useState(false)
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)

  useEffect(() => {
    // Load images
    loadImage(loadImagesArr, setLoadImagesArr)
  }, [])

  useEffect(() => {
    // console.log("threearr changed")
    // console.log(checkAllThreeLoaded(threeImagesBools))
    setAllThreeLoaded(checkAllThreeLoaded(threeImagesBools))
  }, [threeImagesBools])

  useEffect(() => {
    // console.log("imagesarr changed")
    // console.log(checkAllStaticImagesLoaded(loadImagesArr))
    setAllImagesLoaded(checkAllStaticImagesLoaded(loadImagesArr))
  }, [loadImagesArr])

  useEffect(() => {
    if (threeImagesBools.length > 0) {
      if (allThreeLoaded && allImagesLoaded) {
        setPreloaderBool(false)
        setTimeout(() => {}, 200)
      }
    } else if (allImagesLoaded) {
      setPreloaderBool(false)
      setTimeout(() => {}, 200)
    }
  }, [allThreeLoaded, allImagesLoaded])

  return (
    // <AnimatePresence exitBeforeEnter>
    //   {preloaderBool && (
    <motion.div
      variants={ContainerVariants}
      initial="initialVisible"
      animate="animate"
      exit="exit"
    >
      <StyledPreloader>
        <motion.img
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="logo"
          src="/common/DeathSpace_Logo.svg"
          alt="Loading DeathSpace Design"
          data-testid="preloader"
        />
      </StyledPreloader>
    </motion.div>
    // )}
    /* </AnimatePresence> */
  )
}

const StyledPreloader = styled(Div100vh)`
  position: fixed;
  background: ${(props) => props.theme.bgColor};
  z-index: 999;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 70vw;
    @media ${device.tablet} {
      width: 50vw;
    }
    @media ${device.laptop} and (orientation: landscape) {
      width: 30vw;
    }
  }
`

const checkAllStaticImagesLoaded = (arr) => {
  // Check if all images are loaded

  let allStaticImagesLoaded = true

  if (arr.length > 0) {
    arr.map((item) => {
      if (item.loaded_bool == false) {
        allStaticImagesLoaded = false
      }
    })
  }
  return allStaticImagesLoaded
}
const checkAllThreeLoaded = (arr) => {
  // Check if all threejs images are loaded
  let allThreeLoaded_temp = true
  if (arr.length > 0) {
    arr.map((item) => {
      if (item.loaded === false) {
        allThreeLoaded_temp = false
      }
    })
  } else {
    allThreeLoaded_temp = false
  }

  return allThreeLoaded_temp
}

const loadImage = async (arr, updateFunc) => {
  // console.log("loading: " + image + " url " + imageUrl)
  if (arr != null || undefined) {
    let tempArr = [...arr]
    if (tempArr.length > 0) {
      tempArr.map(async (item, index) => {
        let { url, imgObject, name } = item
        item.loaded_bool = false
        const img = new Image()
        img.setAttribute("crossOrigin", "anonymous")
        img.src = url
        await img.decode()
        // img is ready to used

        // console.log("Image " + name + " has been loaded")
        // console.log(
        //   "Image " +
        //     name +
        //     " [x: " +
        //     img.naturalWidth +
        //     ", y: " +
        //     img.naturalHeight +
        //     "]"
        // )

        item.imgObject = img
        item.loaded_bool = true

        updateFunc([...tempArr])
      })
    }
  }
}

export default Preloader
