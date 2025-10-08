import Footer from "@/blocks/Footer/Footer";
import Header from "@/blocks/Header/Header";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
    ;
}
