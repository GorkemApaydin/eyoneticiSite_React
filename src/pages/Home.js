import React from "react";
import Slider from "../components/Slider";
import SliderSign from "../components/SliderSign";
import SliderAlt from "../components/SliderAlt";
import Services from "../components/Services";
import AboutAlt from "../components/AboutAlt";
import About from "../components/About";
import Comments from "../components/Comments";
import TeklifForm from "../components/TeklifForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <SliderSign />
      <SliderAlt />
      <Services />
      <AboutAlt />
      <About />
      <Comments />
      <TeklifForm />
      <Footer />
    </>
  );
}

export default Home;
