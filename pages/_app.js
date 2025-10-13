import Footer from "@/blocks/Footer/Footer";
import Header from "@/blocks/Header/Header";
import "@/styles/globals.scss";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingButtons from '@/blocks/FloatingButtons/FloatingButtons'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function App({ Component, pageProps }) {

  useEffect(() => {
    import("aos/dist/aos.css");
    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);

  return <>

    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
    <FloatingButtons />
  </>
    ;
}
