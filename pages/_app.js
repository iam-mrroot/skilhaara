import Footer from "@/blocks/Footer/Footer";
import Header from "@/blocks/Header/Header";
import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <>

    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_circle_right" />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
    ;
}
