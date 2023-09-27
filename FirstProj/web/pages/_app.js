import "@/styles/globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
