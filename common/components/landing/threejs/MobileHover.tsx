import { useEffect, useRef } from "react"
import styled from "styled-components"
import hoverEffect from "@/components/landing/threejs/hover-effect"

const MobileHover = ({ activeImage }) => {
  const imageEl = useRef()

  useEffect(() => {
    let myAnimation = new hoverEffect({
      parent: imageEl.current,
      intensity: 0.3,
      image1: "/landing/album/image1.png",
      image2: "/landing/album/image2.png",
      displacementImage: "/landing/album/image3.png",
      imagesRatio: 0.5621815718157182,
      //   hover: false,
    })

    setInterval(() => {
      if (myAnimation) {
        myAnimation.next()
        setTimeout(() => {
          myAnimation.previous()
        }, 1000)
      }
    }, 2000)

    let myNode = imageEl.current
    return () => {
      myAnimation = null

      if (myNode) {
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild)
        }
      }
    }
  }, [])

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
