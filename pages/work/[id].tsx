import App from "../../common/components/work/App"
import { createClient } from "contentful"
import safeJsonStringify from "safe-json-stringify"

import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

import { getPlaiceholder } from "plaiceholder"
const Work = ({ projects, compKey, imageProps }) => {
  console.log(projects)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <App data={projects} imageProps={imageProps} key={compKey} />
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

  const {
    base64,
    img,
  } = await getPlaiceholder(
    `https:${data[0].fields.heroImage.fields.file.url}`,
    { size: 10 }
  )

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
      projects: data[0],
      compKey: params.id,
    },
    revalidate: 30,
  }
}

export default Work
