import App from "../../common/components/work/App"
import { createClient } from "contentful"
import safeJsonStringify from "safe-json-stringify"

const Work = ({ projects }) => {
  console.log(projects)
  return <App data={projects} />
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "project",
    include: 10,
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

  return {
    props: {
      projects: data[0],
      revalidate: 2,
      key: params.id,
    },
  }
}

export default Work
