import React from "react";
import Header from "./Header";
import CommunicationSection from "./CommunicationSection";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Section from "./Section";
import ThemeSection from "./ThemeSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CommunicationSection />
      <Section />
      <Features />
      <ThemeSection />
      <Footer />
    </>
  );
};

export default Home;
