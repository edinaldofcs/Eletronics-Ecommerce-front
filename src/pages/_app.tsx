import "../styles/main.css";
import type { AppProps } from "next/app";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { Provider } from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
      <Provider>
        <Header />
        <Component {...pageProps} />
        <Footer />

      </Provider>
  );
}

export default MyApp;
