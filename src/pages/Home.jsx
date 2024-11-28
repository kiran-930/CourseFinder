import React from "react";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import Hero from "../components/home/hero/Hero";
import Recent from "../components/home/recent/Recent";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Recent />
      <Footer />
    </>
  );
};

export default Home;
