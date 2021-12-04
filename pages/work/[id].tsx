// import pageData from "@/public/json/work/data_sample.json"
import App from "../../common/components/work/App"
import { createClient } from "contentful"
import safeJsonStringify from "safe-json-stringify"

const Work = ({ projects }) => {
  // const parsedProjects = JSON.parse(projects)
  console.log(projects)
  // return <></>
  return <App data={projects} />
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticPaths() {
  // Return a list of possible value for id
  // Using sample local JSON
  // const paths = pageData.items.map((item) => {
  //   return {
  //     params: {
  //       id: item.id,
  //     },
  //   }
  // })
  // return {
  //   paths,
  //   fallback: false,
  // }

  const res = await client.getEntries({
    content_type: "project",
    include: 10,
  })

  // const stringifiedData = safeJsonStringify(res)

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
  // Fetch necessary data for the work post using params.id
  // Using sample local JSON
  // const postData = pageData.items.find((item) => item.id === params.id)
  // return {
  //   props: {
  //     postData,
  //   },
  // }
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.id": params.id,
    include: 10,
  })

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
