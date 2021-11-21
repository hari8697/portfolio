import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import hoverEffect from "@/components/landing/threejs/hover-effect"

const MobileHover = ({ activeImage }) => {
  const imageEl = useRef(null)
  const [myAnimation, setMyAnimation] = useState(null)
  const [animatedFwd, setAnimatedFwd] = useState(true)
  useEffect(() => {
    setMyAnimation(
      new hoverEffect({
        parent: imageEl.current,
        intensity: 0.3,
        image1: "/landing/album/image1.png",
        image2: "/landing/album/image2.png",
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
    console.log(activeImage)

    if (myAnimation) {
      let currImage = myAnimation.image1
      let nextImage = `/landing/album/image${activeImage}.png`

      if (animatedFwd) {
        console.log("next")
        setAnimatedFwd(false)
        myAnimation.image1 = currImage
        myAnimation.image2 = nextImage
        console.log(myAnimation)
        myAnimation.render()
        myAnimation.reloadImageTextures()
        myAnimation.next()
      } else {
        setAnimatedFwd(true)
        console.log("previous")

        myAnimation.image2 = currImage
        myAnimation.image1 = nextImage
        myAnimation.render()
        myAnimation.reloadImageTextures()
        myAnimation.previous()
      }

      console.log(myAnimation.image1)
      console.log(myAnimation.image2)
      // myAnimation = new hoverEffect({
      //   parent: imageEl.current,
      //   intensity: 0.3,
      //   image1: currImage,
      //   image2: nextImage,
      //   displacementImage: "/landing/album/image3.png",
      //   imagesRatio: 0.5621815718157182,
      //   hover: false,
      // })
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
