import Layout from "../components/Layout"
import { motion } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
