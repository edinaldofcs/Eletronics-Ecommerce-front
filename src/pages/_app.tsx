import "../styles/main.css";
import type { AppProps } from "next/app";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { Provider } from "../context/UserContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
      <Provider>
        <Head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />

      </Provider>
  );
}

export default MyApp;
