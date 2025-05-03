import React from "react";
import Header from "./Header";
import CommunicationSection from "./CommunicationSection";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section from "./Section";
import Testimonial from "./Testimonial";
import About from "./About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CommunicationSection />
      <Section />
      <About/>
      <Features />
      <Testimonial/>
      {/* <ThemeSection /> */}
      <Footer />
    </>
  );
};

export default Home;
