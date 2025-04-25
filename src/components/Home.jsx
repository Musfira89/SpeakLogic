import React from "react";
import Header from "./Header";
import CommunicationSection from "./CommunicationSection";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section from "./Section";
import ThemeSection from "./ThemeSection";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CommunicationSection />
      <Section />
      <Features />
      <Testimonial/>
      <ThemeSection />
      <Footer />
    </>
  );
};

export default Home;
