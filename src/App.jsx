import Header from "./components/Header";
import CommunicationSection from "./components/CommunicationSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section"
import ThemeSection from "./components/ThemeSection";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CommunicationSection />
      <Section/>
      <Features />
      <ThemeSection/>


      <Footer />
    </>
  );
}

export default App;
