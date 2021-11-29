import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import hoverEffect from "@/components/landing/threejs/hover-effect"
import * as THREE from "three"
import { device } from "@/common/utils"

const MobileHover = ({
  imagesArr,
  activeImage,
  setThreeImagesBools,
  preloaderBool,
}) => {
  const imageEl = useRef(null)
  const [myAnimation, setMyAnimation] = useState(null)
  const [animatedFwd, setAnimatedFwd] = useState(true)

  let [preloadedTextures, setPreloadedTextures] = useState([])
  var loader = new THREE.TextureLoader()

  const populateTextures = () => {
    setPreloadedTextures(
      imagesArr.map((image) => {
        const i = image.id

        setThreeImagesBools((prevVal) => {
          return [...prevVal, { id: i, loaded: false }]
        })

        let newTexture = loader.load(
          `/landing/album/image${image.id}.webp`,
          () => {
            newTexture.needsUpdate = true
            setThreeImagesBools((prevValue) => {
              let newVal = prevValue.map((el) => {
                if (el.id == i && el.loaded == false) {
                  // console.log("loaded", i)
                  return { id: el.id, loaded: true }
                  // return el
                } else {
                  return el
                }
              })

              return newVal
            })
          }
        )

        newTexture.magFilter = THREE.LinearFilter
        newTexture.minFilter = THREE.LinearFilter
        return newTexture
      })
    )
  }

  useEffect(() => {
    populateTextures()
    // console.log(preloadedTextures)
    setMyAnimation(
      new hoverEffect({
        parent: imageEl.current,
        intensity: 0.3,
        image1: "/landing/album/image1.webp",
        image2: "/landing/album/image2.webp",
        displacementImage: "/landing/textures/8.webp",
        imagesRatio: 0.5621815718157182,
        hover: false,
      })
    )
    // setInterval(() => {
    //   if (myAnimation) {
    //     setTimeout(() => {
    //       myAnimation.previous()
    //     }, 1000)
    //   }
    // }, 2000)

    return () => {
      let myNode = imageEl.current
      if (myNode) {
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild)
        }
      }
    }
  }, [])

  useEffect(() => {
    // console.log(activeImage)
    if (myAnimation) {
      let nextImage = `/landing/album/image${activeImage}.webp`
      let currImage

      // console.log(activeImage - 1)
      // console.log(preloadedTextures[activeImage - 1])

      // console.log(preloadedTextures)

      if (animatedFwd) {
        // console.log("next")
        currImage = myAnimation.image1

        // Set images for info, no real funtionality by the following 2 lines
        myAnimation.image1 = currImage
        myAnimation.image2 = nextImage

        myAnimation.changeTextures(
          preloadedTextures[activeImage - 1],
          () => {
            myAnimation.next()
          },
          animatedFwd
        )
        setAnimatedFwd(false)
      } else {
        // console.log("previous")
        currImage = myAnimation.image2

        // Set images for info, no real funtionality by the following 2 lines
        myAnimation.image1 = nextImage
        myAnimation.image2 = currImage

        myAnimation.changeTextures(
          preloadedTextures[activeImage - 1],
          () => {
            myAnimation.previous()
          },
          animatedFwd
        )
        setAnimatedFwd(true)
      }

      // console.log(myAnimation.image1)
      // console.log(myAnimation.image2)
    }
  }, [activeImage])

  return (
    <ImageTrial ref={imageEl} className="hover_container">
      {/* <img
        ref={imageEl}
        src="/landing/album/image1.png"
        alt="An interactive image showcasing various portfolio pieces"
        className="image"
      /> */}
    </ImageTrial>
  )
}

const ImageTrial = styled.div`
  /* position: absolute;
  z-index: 999; */
  width: 100%;
  height: 25vh;

  @media ${device.tablet} {
    height: 35vh;
  }
`
export default MobileHover
