import Head from "next/head"
import Portfolio from "../components/landing/landing"

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>DeathSpace Design</title>
        <meta name="description" content="Portfolio made by Hari Krishnan" />
        <link rel="icon" href="/doge.ico" />
      </Head>

      <main>
        <Portfolio />
      </main>

      <footer></footer>
    </div>
  )
}
