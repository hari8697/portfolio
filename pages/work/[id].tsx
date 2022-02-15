import App from "../../common/components/work/App"
import { createClient } from "contentful"
import safeJsonStringify from "safe-json-stringify"

import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

import { getPlaiceholder } from "plaiceholder"
const Work = ({ projects, compKey, albumImagesProps }) => {
  // console.log(projects)

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    setTimeout(function () {
      window.scrollTo(0, 300)
    }, 200)
    // console.log("heroImageProps", heroImageProps)
    // console.log("albumImagesProps", albumImagesProps)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <App data={projects} albumImagesProps={albumImagesProps} key={compKey} />
    </AnimatePresence>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "project",
  })

  type fieldsType = {
    id: string
  }

  const paths = res.items.map((item) => {
    return {
      params: {
        id: (item.fields as fieldsType).id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.id": params.id,
    include: 10,
  })

  // * Fix for circular reference error
  const stringifiedData = safeJsonStringify(items)
  const data = JSON.parse(stringifiedData)

  console.log("data[0]", data[0].fields.heroImage.fields.file.url)

  // * Hero image plaiceholder
  // const heroImage_attrs = await getPlaiceholder(
  //   `https:${data[0].fields.heroImage.fields.file.url}`,
  //   { size: 10 }
  // )

  // * Album images plaiceholders
  let albumArr = data[0].fields.album
  let albumImages_attrs = []

  for (let index = 0; index < albumArr.length; index++) {
    const tempObj = await getPlaiceholder(
      `https:${albumArr[index].fields.file.url}`,
      {
        size: 10,
      }
    )
    albumImages_attrs.push({ ...tempObj.img, blurDataURL: tempObj.base64 })
  }

  return {
    props: {
      albumImagesProps: albumImages_attrs,
      // heroImageProps: {
      //   ...heroImage_attrs.img,
      //   blurDataURL: heroImage_attrs.base64,
      // },
      projects: data[0],
      compKey: params.id,
    },
    revalidate: 30,
  }
}

export default Work
