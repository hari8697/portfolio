import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import hoverEffect from "@/components/landing/threejs/hover-effect"

const MobileHover = ({ activeImage }) => {
  const imageEl = useRef(null)
  const [myAnimation, setMyAnimation] = useState(null)
  const [animatedFwd, setAnimatedFwd] = useState(true)

  // let animatedFwd = true
  useEffect(() => {
    setMyAnimation(
      new hoverEffect({
        parent: imageEl.current,
        intensity: 0.3,
        image1: "/landing/album/image1.png",
        image2: "/landing/album/image2.png",
        image3: "/landing/album/image3.png",
        displacementImage: "/landing/album/image3.png",
        imagesRatio: 0.5621815718157182,
        hover: false,
      })
    )

    setInterval(() => {
      if (myAnimation) {
        setTimeout(() => {
          myAnimation.previous()
        }, 1000)
      }
    }, 2000)

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
      let nextImage = `/landing/album/image${activeImage}.png`
      let currImage

      if (animatedFwd) {
        // console.log("next")
        currImage = myAnimation.image1

        // Set images for info, no real funtionality by the following 2 lines
        myAnimation.image1 = currImage
        myAnimation.image2 = nextImage

        myAnimation.changeTextures(
          currImage,
          nextImage,
          () => {
            myAnimation.next()
          },
          animatedFwd
        )
        // myAnimation.render()
        setAnimatedFwd(false)
      } else {
        // console.log("previous")
        currImage = myAnimation.image2

        // Set images for info, no real funtionality by the following 2 lines
        myAnimation.image1 = nextImage
        myAnimation.image2 = currImage

        myAnimation.changeTextures(
          nextImage,
          currImage,
          () => {
            myAnimation.previous()
          },
          animatedFwd
        )
        setAnimatedFwd(true)
        // myAnimation.render()
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
`
export default MobileHover
