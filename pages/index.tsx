import styled from "styled-components"
import App from "../common/components/landing/App"
import Preloader from "@/components/shared/Preloader"
import React, { useEffect, useState } from "react"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import { createClient } from "contentful"

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({
    content_type: "project",
  })

  return {
    props: {
      projects: res.items,
    },
  }
}

function Home({ projects }) {
  const [preloaderBool, setPreloaderBool] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPreloaderBool(true)
  //   }, 2500)
  // }, [])

  console.log(projects)

  const [threeImagesBools, setThreeImagesBools] = useState([])
  // useEffect(() => {
  //   console.log(threeImagesBools)
  // }, [threeImagesBools])

  const [loadImagesArr, setLoadImagesArr] = useState([
    ...social_images_arr,
    {
      url: "/landing/scrollHorizontal.svg",
      name: "scrollHorizontal",
      loaded_bool: false,
      imgObject: {},
    },
    {
      url: "/common/DeathSpace_Logo.svg",
      name: "DeathSpace_Logo",
      loaded_bool: false,
      imgObject: {},
    },
  ])

  return (
    <IndexPage>
      <AnimatePresence>
        {preloaderBool && (
          <Preloader
            setPreloaderBool={setPreloaderBool}
            threeImagesBools={threeImagesBools}
            loadImagesArr={loadImagesArr}
            setLoadImagesArr={setLoadImagesArr}
            key={"preloader"}
          />
        )}
      </AnimatePresence>
      <App
        preloaderBool={preloaderBool}
        setThreeImagesBools={setThreeImagesBools}
        key={"app"}
      />
    </IndexPage>
  )
}

const IndexPage = styled.div`
  width: 100%;
  height: 100%;
`
const social_images_arr = Array.from({ length: 4 }, (_, i) => {
  return {
    url: `/landing/social/${i + 1}.svg`,
    name: `social_icon_${i + 1}`,
    loaded_bool: false,
    imgObject: {},
  }
})
const tech_icons_arr = Array.from({ length: 14 }, (_, i) => {
  return {
    url: `/about/tech_icons/${i + 1}.svg`,
    name: `tech_icons${i + 1}`,
    loaded_bool: false,
    imgObject: {},
  }
})

// const load_images_arr = [
//   ...social_images_arr,
//   ...tech_icons_arr,
//   {
//     url: "/landing/scrollHorizontal.svg",
//     name: "scrollHorizontal",
//     loaded_bool: false,
//     imgObject: {},
//   },
//   {
//     url: "/common/DeathSpace_Logo.svg",
//     name: "DeathSpace_Logo",
//     loaded_bool: false,
//     imgObject: {},
//   },
// ]
export default Home
