import pageData from "@/public/json/work/data_sample.json"
import App from "../../common/components/work/App"

const Work = ({ postData }) => {
  return <App data={postData} />
}

export default Work

export async function getStaticPaths() {
  // Return a list of possible value for id

  const paths = pageData.items.map((item) => {
    return {
      params: {
        id: item.id,
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
  const postData = pageData.items.find((item) => item.id === params.id)

  return {
    props: {
      postData,
    },
  }
}
