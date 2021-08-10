import "../index.css";
import Head from "next/head";
import "../style/style.css";
import wrapper from "../store/configureStore";
import { CookiesProvider } from "react-cookie";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CookiesProvider>
        <Component />
      </CookiesProvider>
    </>
  );
};
export default wrapper.withRedux(App);
