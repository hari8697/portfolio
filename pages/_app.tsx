import Layout from "../common/components/layouts/Layout"
import AppContextProvider from "../contexts/appContext"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout title="DeathSpace Design">
      <AppContextProvider>
        <Component {...pageProps} key={router.route} />
      </AppContextProvider>
    </Layout>
  )
}

export default MyApp
