import styled from "styled-components"
import App from "../common/components/landing/App"
import Preloader from "@/components/shared/Preloader"
import React, { useEffect, useState, useContext } from "react"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import { createClient } from "contentful"
import safeJsonStringify from "safe-json-stringify"

import { AppContext } from "../contexts/appContext"

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Home({ projects }) {
  // * Using context for persisting state of preloaderBool
  const { preloader, projectsState } = useContext(AppContext)
  const [isPreloading, setIsPreloading] = preloader
  // const [projectList, setProjectList] = projectsState

  // console.log(isPreloading)
  // const [preloaderBool, setPreloaderBool] = useState(true) // ? Previous local state implementation
  const [threeImagesBools, setThreeImagesBools] = useState([])
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

  useEffect(() => {
    console.log(isPreloading)
    return () => {}
  }, [isPreloading])

  // useEffect(() => {
  //   setProjectList(projects)
  // }, [])

  return (
    <IndexPage>
      <AnimatePresence>
        {isPreloading && (
          <Preloader
            isPreloading={isPreloading}
            setPreloaderBool={setIsPreloading}
            threeImagesBools={threeImagesBools}
            loadImagesArr={loadImagesArr}
            setLoadImagesArr={setLoadImagesArr}
            key={"preloader"}
          />
        )}
      </AnimatePresence>
      <App
        projects={projects}
        preloaderBool={isPreloading}
        setThreeImagesBools={setThreeImagesBools}
        key={"app"}
      />
    </IndexPage>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({
    content_type: "project",
    order: "sys.createdAt",
  })

  // * Fix for circular reference error
  const stringifiedData = safeJsonStringify(res)
  const data = JSON.parse(stringifiedData)

  return {
    props: {
      projects: data.items,
    },
    revalidate: 30,
  }
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

export default Home
