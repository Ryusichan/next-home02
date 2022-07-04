import Head from "next/head";

import "../styles/globals.css";
import "../styles/css/bootstrap.css";
import "../styles/css/fontawesome-all.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/styles.css";
import "../styles/css/swiper.css";
import Script from "next/script";

import swiper from "../styles/js/swiper.min.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <!-- SEO Meta Tags --> */}
        <meta
          name="description"
          content="Sync is a landing page HTML template built with Bootstrap 4 for presenting mobile apps to the online audience and for getting visitors to become users."
        />
        <meta name="author" content="Inovatik" />

        {/* <!-- OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ --> */}
        {/* <meta property="og:site_name" content="" /> <!-- website name -->
    <meta property="og:site" content="" /> <!-- website link -->
    <meta property="og:title" content=""/> <!-- title shown in the actual shared post -->
    <meta property="og:description" content="" /> <!-- description shown in the actual shared post -->
    <meta property="og:image" content="" /> <!-- image link, make sure it's jpg -->
    <meta property="og:url" content="" /> <!-- where do you want your post to link to -->
    <meta property="og:type" content="article" /> */}

        {/* <!-- Webpage Title --> */}
        <title>Sync - Mobile App Landing Page HTML Template</title>

        <Script src="../styles/js/jquery.min.js" />
        <Script src="../styles/js/popper.min.js" />
        <Script src="../styles/js/bootstrap.min.js" />
        <Script src="../styles/js/jquery.easing.min.js" />
        <Script src={swiper} />
        <Script src="../styles/js/jquery.magnific-popup.js" />
        <Script src="../styles/js/validator.min.js" />
        <Script src="../styles/js/scripts.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
