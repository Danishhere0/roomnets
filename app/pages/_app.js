import "../public/assets/scss/app.scss";
import Head from "next/head";
import React, { createContext  } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TapToTop from "../layout/TapToTop";
import Customizer from "../layout/Customizer";
import { store } from "../redux-toolkit/store";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";
import StoreOldData from "../utils/StoreOldData";
import "react-toastify/dist/ReactToastify.css";
import { ConfigDB } from "../config/themeCustomizerConfig";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      document.documentElement.style.setProperty("--theme-default", ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#ff5c41");
      document.documentElement.style.setProperty("--theme-default2", ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#ff8c41");
    });
    document.documentElement.style.setProperty("--theme-default", ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#ff5c41");
    document.documentElement.style.setProperty("--theme-default2", ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#ff8c41");
  }, [router.events]);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Roomnets: Your One Stop Real Estate Partner Website" />
        <meta name="keywords" content="Roomnets" />
        <meta name="author" content="Roomnets" />
        <link rel="icon" href="/logo512.png" type="image/x-icon" />
        <title>.............:::: Roomnets: Your One Stop Real Estate Partner Website ::::............</title>
      </Head>
      <Provider store={store}>
       {/* <Provider store={store2} context={store2Context}> */}
          <>
            <Component {...pageProps} />
           {/* <Customizer /> */}
            <TapToTop />
            {/* <StoreOldData />*/}
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={"light"} />
          </>
       {/* </Provider>  */}
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
