import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Products from "../components/Products/Products";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Machinery from "../components/Machinery/Machinery";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ExpertiseStrip from "../components/ExpertiseStrip";
import TopHeader from "../components/TopHeader";


function Home() {
  return (
    <>
    <TopHeader/>
      <Navbar />
      <Hero />
      <ExpertiseStrip />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Machinery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;