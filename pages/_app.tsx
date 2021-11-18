import Layout from "../common/components/layouts/Layout"

import { ToastContainer, toast } from "react-toastify"
function MyApp({ Component, pageProps, router }) {
  return (
    <Layout title="DeathSpace Design">
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
