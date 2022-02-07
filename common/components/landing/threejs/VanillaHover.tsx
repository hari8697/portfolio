import * as THREE from "three"

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"

import { vertex } from "./shader/vertex.js"
import { fragment } from "./shader/fragment.js"

import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { motion, useVelocity, useTransform } from "framer-motion"
import { useWindowSize } from "@/common/utils/"
import { useRouter } from "next/router"

const VanillaHover = ({
  animatedX,
  imagesArr,
  moveByFactor,
  scrollValueY,
  pageExtraHeight,
  onTextureLoad,
  setThreeImagesBools,
}) => {
  const router = useRouter()
  const canvasEl = useRef(null)
  const [isExiting, setIsExiting] = useState(false)

  const { width: vW, height: vH } = useWindowSize()

  let reqAnimFrame

  // const [panPressed, setPanPressed] = useState(false)
  let camera, scene, renderer, composer, renderPass, customPass, canvasNode
  let material,
    mesh,
    uMouse = new THREE.Vector2(0, 0)

  const snapArr = []

  const totalPageHeight = pageExtraHeight * vH // 3.2 * 936
  let singleSliceOfPage = totalPageHeight / imagesArr.length // 748.75
  // let scrollToValue = singleSliceOfPage * currSelectedElement

  const maxAnimatedXValue = (imagesArr.length - 1) * moveByFactor
  const scrollValueY_animatedX = useTransform(
    scrollValueY,
    [0, 1],
    [0, -maxAnimatedXValue]
  )
  let scrollVal = useTransform(
    animatedX,
    [0, -maxAnimatedXValue],
    [0, totalPageHeight - singleSliceOfPage]
  )
  let mappingArr = useTransform(
    scrollVal,
    [0, totalPageHeight - singleSliceOfPage],
    [0, -maxAnimatedXValue]
  )

  let isScrollingY = false
  let isSnapping = false

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  let meshArr

  // const ease = [0.6, 0.05, -0.01, 0.99]
  // const easeVal = [0.65, 0, 0.35, 1]
  let animatedXVelocity = useVelocity(animatedX)

  let initialX = 0,
    currX = 0,
    movingX,
    calcX,
    panPressed

  const ogFunc = () => {
    canvasNode = canvasEl.current
    const init = () => {
      camera = new THREE.PerspectiveCamera(
        75,
        canvasNode.offsetWidth / canvasNode.offsetHeight,
        0.01,
        10
      )
      // camera.fov =
      //   2 *
      //   Math.atan(canvasNode.offsetWidth / camera.aspect / (2 * 5)) *
      //   (180 / Math.PI) // in degrees

      camera.position.z = 5

      scene = new THREE.Scene()

      meshArr = imagesArr.map((el) => {
        const i = el.id

        setThreeImagesBools((prevVal) => {
          return [...prevVal, { id: i, loaded: false }]
        })

        var obj = {
          id: i - 1,
          material,
          geometry: new THREE.PlaneGeometry(8, 4.5),
          texture: new THREE.TextureLoader().load(
            // `/landing/album/image${i}.webp`,
            el.src ? el.src : `/landing/album/image${i}.webp`,
            () => {
              // Call this on texture load
              setThreeImagesBools((prevValue) => {
                let newVal = prevValue.map((item) => {
                  if (item.id == i && item.loaded == false) {
                    // console.log("loaded", i)
                    return { id: item.id, loaded: true }
                    // return item
                  } else {
                    return item
                  }
                })

                return newVal
              })
            }
          ),
          mesh,
        }

        obj.material = new THREE.MeshBasicMaterial({
          map: obj.texture,
        })
        obj.mesh = new THREE.Mesh(obj.geometry, obj.material)
        // console.log(obj.mesh.geometry.parameters.width)

        return obj
      })

      meshArr.forEach((el) => {
        scene.add(el.mesh)
        el.mesh.position.set(el.id * moveByFactor, 0)
      })

      for (let i = 0; i < meshArr.length; i++) {
        i == 0
          ? snapArr.push({ id: i, val: 0 })
          : snapArr.push({
              id: i,
              val: -(moveByFactor * (i - 1) + moveByFactor / 2),
            })
      }

      // const bgColor = new THREE.Color(0x0e0c10)
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      // renderer.setClearColor(0xffffff, 0)
      scene.background = new THREE.Color(0x0e0c10)
      // scene.background = bgColor
      renderer.setSize(canvasNode.offsetWidth, canvasNode.offsetHeight)
      // renderer.outputEncoding = THREE.sRGBEncoding
      canvasNode.appendChild(renderer.domElement)

      //postprocessing

      composer = new EffectComposer(renderer)
      renderPass = new RenderPass(scene, camera)
      composer.addPass(renderPass)

      const myEffect = {
        uniforms: {
          tDiffuse: { value: null },
          resolution: {
            value: new THREE.Vector2(1, window.innerHeight / window.innerWidth),
          },
          uMouse: { value: new THREE.Vector2(-10, -10) },
          uVelo: { value: 0 },
          uScale: { value: 0 },
          uType: { value: 0 },
          time: { value: 0 },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
      }

      customPass = new ShaderPass(myEffect)
      customPass.renderToScreen = true
      composer.addPass(customPass)
    }

    const animate = function () {
      // console.log(animatedX.get())

      // let calcX = animatedX.get() + (currX - initialX) * 10
      // if (calcX <= 0 && panPressed) animatedX.set(calcX)

      // console.log("currX" + currX + "initialX" + initialX)

      // console.log(movingX)
      camera.position.x = -animatedX.get()

      // meshArr.forEach((el) => {
      //   scene.add(el.mesh)
      //   el.mesh.position.x = animatedX.get() + el.id * 10.5
      // })

      // mesh.position.x = animatedX.get()
      // mesh2.position.x = animatedX.get() + moveByFactor

      customPass.uniforms.uMouse.value = uMouse

      // renderer.render( scene, camera );
      composer && composer.render()

      reqAnimFrame = requestAnimationFrame(animate)

      // 165 fps limiter

      // setTimeout(function () {
      //   customPass.uniforms.uMouse.value = uMouse
      //   camera.position.x = -animatedX.get()

      //   requestAnimationFrame(animate)
      // }, 1000 / 165)
    }

    canvasEl.current.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1

      // mousemove / touchmove
      uMouse.x = e.clientX / canvasNode.offsetWidth
      uMouse.y = 1 - e.clientY / canvasNode.offsetHeight

      // Original code
      // uMouse.x = e.clientX / window.innerWidth
      // uMouse.y = 1 - e.clientY / window.innerHeight
      // console.log(uMouse.x, uMouse.y)
      // console
      //   .log
      //   // "e.clientX " +
      //     e.clientX +
      //   " mouseX: " + uMouse.x + " mouseY: " + uMouse.y
      //   ()
    })

    // canvasNode.onwheel = (event) => {
    //   // console.log(event.deltaY)

    //   // animatedX.set(animatedX.get() - event.deltaY * 0.03175)
    // }

    // canvasNode.addEventListener("click", onMouseClick)

    let drag = false

    canvasNode.addEventListener("mousedown", () => (drag = false))
    canvasNode.addEventListener("mousemove", () => (drag = true))
    canvasNode.addEventListener("mouseup", (e) => {
      if (drag) {
        // console.log("drag")
      } else {
        onMouseClick(e)
      }
    })

    init()
    animate()
  }

  useEffect(() => {
    window.onunload = function () {
      // window.scrollTo(0, 0)
    }

    ogFunc()

    const unsubscribeSnap = scrollVal.onChange(() => {
      // console.log(scrollVal.get())
      // console.log(scrollVal.get())
    })

    const unsubscribeY = scrollValueY_animatedX.onChange(() => {
      if (!isSnapping) {
        // console.log("scrollValue", scrollValueY_animatedX.get())
        // let tempScrollVal = scrollValueY_animatedX.get()
        isScrollingY = true
        animatedX.set(scrollValueY_animatedX.get())

        // setTimeout(() => {
        //   if (scrollValueY_animatedX.get() == tempScrollVal) {
        //     // Stopped scrolling
        //     // isScrollingY = false
        //     // snapFunc()
        //     // console.log(isScrollingY)
        //   }
        // }, 250)
      }
    })
    const unsubscribeAnimX = animatedX.onChange(() => {
      // console.log(animatedX.get())

      if (!panPressed && !isScrollingY) {
        snapFunc()
        // console.log(animatedX.get())
        // setTimeout(() => {
        //   snapFunc()
        // }, 250)
      }
    })
    canvasNode.addEventListener("mouseup", onMouseUp, false)
    canvasNode.addEventListener("mousedown", onMouseDown, false)
    window.addEventListener("resize", onResize)

    return () => {
      var myNode = canvasEl.current
      if (myNode) {
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild)
        }
      }

      window.removeEventListener("resize", onResize)

      /**
       * * Clear all framer motion onChange listeners
       */
      unsubscribeSnap()
      unsubscribeY()
      unsubscribeAnimX()

      /**
       * * Clear the animation loop when unmounted
       */
      cancelAnimationFrame(reqAnimFrame)
    }
  }, [])

  // const nearestOddNumber = i => {
  //   if (i%2 == 0) return i
  //   else {
  //     while (i%2 != 0) {
  //       i++
  //     }
  //     return i
  //   }
  // }

  const onResize = () => {
    // console.log("updated!")
    // console.log(2 * Math.atan(8 / camera.aspect / (2 * 5)) * (180 / Math.PI)) // in degrees
    // camera.fov = 2 * Math.atan(12 / camera.aspect / (2 * 5)) * (180 / Math.PI)

    canvasNode = canvasEl.current

    if (canvasNode) {
      // panPressed = false
      camera.aspect = canvasNode.offsetWidth / canvasNode.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(canvasNode.offsetWidth, canvasNode.offsetHeight)
      composer.setSize(canvasNode.offsetWidth, canvasNode.offsetHeight)
    }
  }

  let currSelectedElement
  const snapFunc = () => {
    isSnapping = true
    // console.log("animatedX", animatedX.get())
    // OG DRY implementation
    // const snapArr = [-13, -5, 0]
    // if (animatedX.get() <= snapArr[0]) animatedX.set(-18)
    // else if (animatedX.get() <= snapArr[1]) animatedX.set(-9)
    // else if (animatedX.get() <= snapArr[2]) animatedX.set(0)

    // console.log(snapArr)
    // const snapArr = [
    //   { id: 0, val: 0 },
    //   { id: 1, val: -5.25 },
    //   { id: 2, val: -15.75 },
    // ]
    // console.log(isScrollingY)

    currSelectedElement = 0
    snapArr.map((el) => {
      // if (animatedX.get() >= 0 && !panPressed) {
      //   currSelectedElement = 0
      //   animatedX.set(0)
      // } else
      if (animatedX.get() <= el.val && !panPressed) {
        currSelectedElement = el.id
      }
    })

    // console.log("currSelectedElement", currSelectedElement)

    if (
      currSelectedElement != 0 &&
      (currSelectedElement != null || undefined)
    ) {
      animatedX.set(-(currSelectedElement * moveByFactor))
    } else {
      animatedX.set(0)
    }

    window.scrollTo(0, scrollVal.get())

    /**
     * Removing this function, using scrollVal motionValue instead to scroll, and implement smooth scrolling.
     */
    // scrollOnSnap()

    if (animatedX.get() == -(currSelectedElement * moveByFactor)) {
      setTimeout(() => {
        if (animatedX.get() == -(currSelectedElement * moveByFactor)) {
          isSnapping = false
        }
      }, 50)
    }
    // console.log(el.id * moveByFactor)
    // console.log(animatedX.get())

    /**
     * ? Don't know why this code exists, probably as a default snap for 0th element?
     * * Yup, this was a default snap for the first (0th) element
     */

    // if (el.id == 0 && !panPressed) {
    //   animatedX.set(0)
    // }

    // if (!isScrollingY) {
    //   // scrollOnSnap()
    // }
  }

  const moveCanvas = () => {
    // Move the images and all moving parts by manipulating animatedX
    calcX = animatedX.get() + movingX * 10.5
    // console.log(animatedX.get())

    if (panPressed) animatedX.set(calcX)
  }

  // const scrollOnSnap = () => {

  /**
   * TODO: Implement smooth scrolling if possible
   */
  //   // console.log("snapping")

  //   let currAnimX = animatedX.get()

  //   const totalPageHeight = pageExtraHeight * vH

  //   let singleSliceOfPage = totalPageHeight / imagesArr.length
  //   let scrollToValue = singleSliceOfPage * currSelectedElement

  //   // console.log("currSelectedElement", currSelectedElement)
  //   // console.log("pageExtraHeight", pageExtraHeight)
  //   // console.log("vH", vH)
  //   // console.log("totalPageHeight", totalPageHeight)
  //   // console.log("singleSliceOfPage", singleSliceOfPage)
  //   // console.log("scrollToValue", scrollToValue)
  //   if (!isNaN(scrollToValue)) {
  //     // console.log(scrollToValue)
  //     // window.scrollTo(0, scrollToValue)
  //   }

  //   // // console.log(scrollToValue)
  //   // // const smoothScroll = (h) => {
  //   // //   let i = h || 0
  //   // //   if (i < scrollToValue) {
  //   // //     setTimeout(() => {
  //   // //       window.scrollTo(0, i)
  //   // //       smoothScroll(i + 10)
  //   // //     }, 10)
  //   // //   }
  //   // // }

  //   // console.log(scrollVal.get())
  // }

  function onPan(event, info) {
    canvasNode = canvasEl.current

    // console.log(panPressed)
    // const relativeX = info.point.x / canvasNode.offsetWidth - 0.5

    // let calcX = animatedX.get() + relativeX * 0.02
    // animatedX.set(calcX)
    // console.log(relativeX)

    // let panX = info.point.x / canvasNode.offsetWidth
    // if (panX - currX == 0)

    if (canvasNode != null || undefined) {
      setTimeout(() => {
        if (canvasNode != null || undefined) {
          initialX = info.point.x / canvasNode.offsetWidth
        }
      }, 250)
      currX = info.point.x / canvasNode.offsetWidth
      movingX = currX - initialX
    }

    if (animatedX.get() < 0) {
      moveCanvas()
    } else if (animatedX.get() == 0 && movingX < 0) {
      moveCanvas()
    } else if (movingX > 0) {
      animatedX.set(0)
    }

    // console.log("currX" + currX)

    // console.log("animatedX: " + animatedX.get())
  }

  function onPanStart(event, info) {
    // setPanPressed(true)
    panPressed = true
    canvasNode = canvasEl.current

    // console.log("press start")

    canvasNode = canvasEl.current

    if (canvasNode != null || undefined) {
      initialX = info.point.x / canvasNode.offsetWidth
    }

    // console.log("initialX" + initialX)
  }

  function onPanEnd(event, info) {
    // setPanPressed(false)
    panPressed = false
    // console.log("press end")
    canvasNode = canvasEl.current
    // currX = info.point.x / canvasNode.offsetWidth

    snapFunc()
  }

  function onMouseClick(event) {
    event.preventDefault()
    movingX = currX - initialX
    var bounds = canvasNode.getBoundingClientRect()
    mouse.x = ((event.clientX - bounds.left) / canvasNode.clientWidth) * 2 - 1
    mouse.y = -((event.clientY - bounds.top) / canvasNode.clientHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)

    var intersects = raycaster.intersectObjects(scene.children, true)
    if (intersects.length > 0) {
      // Check if still
      // Do stuff

      intersects.forEach((element) => {
        let positiveAnimatedX = Math.abs(animatedX.get())

        // animatedX.get() < 0
        //   ? (positiveAnimatedX = animatedX.get() * -1)
        //   : (positiveAnimatedX = animatedX.get())

        // console.log(animatedX.get(), positiveAnimatedX)

        if (
          positiveAnimatedX < element.object.position.x + 0.1 &&
          positiveAnimatedX > element.object.position.x - 0.1 &&
          movingX < 0.01 &&
          movingX > -0.01
        ) {
          // Open artwork page / portfolio piece
          console.log("success!")
          console.log(currSelectedElement)
          // console.log("positiveAnimatedX", positiveAnimatedX)

          // console.log("pushing")
          if (!isExiting) {
            const goToUrl = `work/${imagesArr[currSelectedElement].slug}`
            router.push(goToUrl, undefined, { scroll: false })
          }
          setIsExiting((prev) => {
            // console.log(prev)
            return true
          })

          // console.log(animatedXVelocity.get())
          meshArr.forEach((el) => {
            if (element.object.position === el.mesh.position) {
              // console.log(el.id)
            }
          })
        } else {
          // Do nothing
          // console.log("lol")
        }
      })

      // console.log(intersects)
    }
  }

  const onMouseDown = () => {
    isScrollingY = false
  }
  const onMouseUp = () => {
    snapFunc()
  }

  return (
    <CanvasElement
      onPanStart={!isExiting && onPanStart}
      onPanEnd={!isExiting && onPanEnd}
      onPan={!isExiting && onPan}
      ref={canvasEl}
      className="threejsCover"
    ></CanvasElement>
  )
}

const CanvasElement = styled(motion.div)`
  cursor: grab;
  width: 100%;
  height: 100%;
`

export default VanillaHover
