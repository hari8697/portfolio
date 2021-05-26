import Layout from "../common/components/layouts/Layout"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout title="DeathSpace Design">
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
