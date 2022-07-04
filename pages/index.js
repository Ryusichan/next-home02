// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SmallFeature from "../components/SmallFeature";
import Description from "../components/Description";
import DetailLightBox from "../components/DetailLightBox";
import Description02 from "../components/Description02";
import Feature from "../components/Feature";
import ScreenShot from "../components/ScreenShot";
import Testimonials from "../components/Testimonials";
import Statistics from "../components/Statistics";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <div className="App">
      {/* <Preloader /> */}

      <Navigation />

      <Header />

      <SmallFeature />

      <Description />

      <DetailLightBox />

      <Description02 />

      <Feature />

      <ScreenShot />

      <Testimonials />

      <Statistics />

      <Download />

      <Footer />

      {/* Copyright */}
      <Copyright />
    </div>
  );
}
